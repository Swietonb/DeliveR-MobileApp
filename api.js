const API_URL = 'https://deliveryzonesvm.polandcentral.cloudapp.azure.com';

// Funkcja do pobrania stref dostaw
export const fetchDeliveryZones = async () => {
    try {
        const response = await fetch(`${API_URL}/zones`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Błąd podczas pobierania stref dostaw:', error);
        throw error;
    }
};
// Funkcja do pobrania aktualnej strefy
export const getCurrentZone = async () => {
    try {
        const response = await fetch(`${API_URL}/current-zone`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Błąd podczas pobierania aktualnej strefy:', error);
        throw error;
    }
};

// Funkcja do ustawienia wybranej strefy
export const setZone = async (zoneId, zoneName) => {
    try {
        const response = await fetch(`${API_URL}/set-zone`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ zoneId, zoneName })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Błąd podczas ustawiania strefy:', error);
        throw error;
    }
};

export const sendSelectedZone = async () => {   //Wysyłanie wybranej strefy
    if (selectedZone) {
      try {
        const response = await fetch(`${API_URL}/set-zone`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ zoneId: selectedZone.id, zoneName: selectedZone.name })
        });
  
        const data = await response.json();
        alert(data.message);
      } catch (error) {
        console.error('Błąd podczas ustawiania strefy:', error);
      }
    }
  };
