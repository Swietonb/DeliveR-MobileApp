const express = require('express');
const sql = require('mssql');
const app = express();
const https = require('https'); 
const fs = require('fs'); 
const http = require('http')
require('dotenv').config();

app.use((req, res, next) => {
	if (req.secure){
		next();
	}else{
		res.redirect('https://${req.headers.host}${req.url}');
	}
});

// Ścieżki do plików certyfikatu SSL
const privateKeyPath = process.env.PRIVATE_KEY_PATH;
const certificatePath = process.env.CERTIFICATE_PATH;

// Konfiguracja HTTPS z plikami certyfikatu
const httpsOptions = {
  key: fs.readFileSync(privateKeyPath),
  cert: fs.readFileSync(certificatePath)
};

// Konfiguracja połączenia z bazą danych SQL
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};

// Funkcja do pobrania możliwych stref dostaw
async function getDeliveryZones() {
  try {
      await sql.connect(dbConfig);
      const result = await sql.query`SELECT * FROM DeliveryZones ORDER BY CAST(id AS INT);`;
      console.log('Możliwe strefy:', result.recordset);
      return result.recordset;
  } catch (err) {
      console.error('Błąd podczas odczytu stref dostaw:', err);
      throw err;
  }
}

app.use(express.json());

// Endpoint do pobierania stref dostaw
app.get('/zones', async (req, res) => {
  try {
    const zones = await getDeliveryZones();
    res.json(zones);
  } catch (err) {
    res.status(500).send('Błąd serwera podczas pobierania stref dostaw.');
  }
});

// Endpoint do pobierania aktualnej strefy
app.get('/current-zone', async (req, res) => {
  try {
      await sql.connect(dbConfig);
      const result = await sql.query`SELECT * FROM CurrentZone`;
      if (result.recordset.length > 0) {
          res.json(result.recordset[0]);
      } else {
          res.status(404).send('Aktualna strefa nie została znaleziona.');
      }
  } catch (err) {
      console.error('Błąd podczas odczytu aktualnej strefy:', err);
      res.status(500).send('Błąd serwera podczas pobierania aktualnej strefy.');
  }
});

// Endpoint do ustawiania wybranej strefy
app.post('/set-zone', async (req, res) => {
  try {
      const { zoneId, zoneName } = req.body;
      await sql.connect(dbConfig);

      const checkResult = await sql.query`SELECT COUNT(*) as count FROM SelectedZone`;
      const count = checkResult.recordset[0].count;

      if (count > 0) {
          await sql.query`UPDATE SelectedZone SET id = ${zoneId}, name = ${zoneName} WHERE id = (SELECT TOP 1 id FROM SelectedZone)`;
      } else {
          await sql.query`INSERT INTO SelectedZone (id, name) VALUES (${zoneId}, ${zoneName})`;
      }

      res.json({ message: 'Wybrana strefa została zaktualizowana.' });
  } catch (err) {
      console.error('Błąd podczas aktualizacji wybranej strefy:', err);
      res.status(500).send('Błąd serwera podczas aktualizacji wybranej strefy.');
  }
});

https.createServer(httpsOptions, app).listen(443, () => {
  console.log(`Serwer działa na porcie 443`);
});

http.createServer(app).listen(80, () => {
	console.log('Serwer HTTP działa na porcie 80');
});
