# DelivR-MobileApp
## Opis
Aplikacja DelivR jest przeznaczona do sterowania robotem mobilnym. Umożliwia wybór strefy docelowej dla robota poprzez intuicyjny interfejs siatki stref, a także umożliwia śledzenie aktualnej lokalizacji robota. Aplikacja zawiera również sekcję ustawień, pozwalającą na dostosowanie rozmiaru siatki stref, co jest przydatne przy zmianie konfiguracji przestrzeni roboczej.

## **Zrzuty Ekranu Z Aplikacji**
<p float="left">
  <img src="https://github.com/Swietonb/DeliveR-MobileApp/assets/115777585/20e4fedd-50fa-45f6-8072-8c5fc56e3fb8" width="250" />
  <img src="https://github.com/Swietonb/DeliveR-MobileApp/assets/115777585/5b8297db-e495-4ca7-be20-49f1ee738b60" width="250" />
  <img src="https://github.com/Swietonb/DeliveR-MobileApp/assets/115777585/4de11103-e211-4299-86d6-fb01a5a59f4f" width="250" />
</p>
<p float="left">
  <img src="https://github.com/Swietonb/DeliveR-MobileApp/assets/115777585/1ad3f6a1-a13b-43bb-94f7-09239269747e" width="200" />
  <img src="https://github.com/Swietonb/DeliveR-MobileApp/assets/115777585/01a6700a-ec2b-41ae-9862-e59e2000afba" width="200" />
  <img src="https://github.com/Swietonb/DeliveR-MobileApp/assets/115777585/60d2b9ba-b92e-40ed-ba66-54555b385b62" width="200" />
</p>


## **Technologie i Narzędzia użyte w projekcie:**
* **React Native:** Framework do budowy aplikacji mobilnych przy użyciu języka JavaScript i React.
* **Expo:** Platforma otwartego źródła do budowy aplikacji React Native, która zapewnia zestaw narzędzi i usług ułatwiających rozwój aplikacji.
* **EAS (Expo Application Services):** Zestaw narzędzi oferowanych przez Expo do budowania, wdrażania i aktualizacji aplikacji React Native.
* **npm (Node Package Manager):** Menadżer pakietów dla języka JavaScript, używany do zarządzania zależnościami projektu.
* **JavaScript/ECMAScript:** Język programowania, na którym opiera się React Native.
* **Git:** System kontroli wersji używany do śledzenia zmian w kodzie i współpracy.
* **Visual Studio Code lub inny IDE/edytor tekstu:** Środowisko programistyczne używane do pisania i edytowania kodu.
* **React Navigation:** Biblioteka do obsługi nawigacji w aplikacjach React Native.
* **Node.js:** Środowisko uruchomieniowe JavaScript wykorzystywane do uruchamiania narzędzi deweloperskich.
* **Expo Fonts (expo-font):** Biblioteka do zarządzania czcionkami w aplikacjach Expo/React Native.
* **React Context API:** Mechanizm zarządzania stanem w React, używany do przechowywania i udostępniania danych między komponentami.
* **REST API/HTTP Client:** Do komunikacji z serwerem backendowym (np. fetch API w JavaScript).

## **Instalacja**
Upewnij się, że masz zainstalowane następujące narzędzia:
* Node.js
* Expo CLI
* Git

## **Uruchamianie w Trybie Deweloperskim**
1. Klonowanie Repozytorium: Sklonuj repozytorium Git do lokalnego środowiska:  
   `git clone https://github.com/Swietonb/DelivR-MobileApp.git`
2. Instalacja Zależności:
   W projekcie aplikacji, zależności projektu są zdefiniowane w pliku package.json
   Wykonaj polecenie `npm install` w katalogu głównym Twojego projektu, gdzie znajduje się plik package.json. To polecenie automatycznie pobierze i zainstaluje wszystkie zależności wymienione w package.json.
3. Uruchomienie Aplikacji: Uruchom aplikację w trybie deweloperskim:  
   `npm start`
4. Po uruchomieniu Expo CLI, możesz otworzyć aplikację na symulatorze/emulatorze lub na urządzeniu fizycznym skanując kod QR.

## **Budowanie Aplikacji**
Aby zbudować aplikację do formatu .apk (dla Androida):  
#### Wymagane Narzędzia ####
1. EAS CLI: Zainstaluj Expo Application Services CLI globalnie  
   `npm install -g eas-cli`
2. Konto Expo: Musisz posiadać konto na platformie Expo.
#### Kroki Budowania ####
1. Logowanie do Expo: Zaloguj się do swojego konta Expo w terminalu:  
   `eas login`
2. Konfiguracja EAS: Upewnij się, że projekt jest skonfigurowany do budowania z EAS. Możesz to zrobić, uruchamiając:  
   `eas build:configure`
3. Budowanie Aplikacji: Uruchom proces budowania aplikacji:  
   `eas build -p android --profile preview`
4. Po zakończeniu procesu budowania, plik .apk będzie dostępny do pobrania z twojego konta Expo w sekcji Builds.

## **Struktura Projektu** ##
* App.js: Główny plik aplikacji, zawierający konfigurację nawigacji.
* api.js: Zawiera funkcje API do komunikacji z backendem.
* HomeScreen.js: Strona główna aplikacji.
* SelectZone.js: Ekran do wyboru strefy.
* CurrentZone.js: Ekran pokazujący aktualną strefę.
* GridSettings.js: Ekran ustawień siatki stref.
* GridContext.js: Kontekst Reacta do zarządzania stanem siatki stref. Umożliwia przechowywanie i udostępnianie informacji o rozmiarze siatki w całej aplikacji.
* SectionHeader.js: Komponent nagłówka sekcji, używany w różnych ekranach. Zawiera elementy nawigacyjne i tytułowe.
* SplashScreen.js: Ekran powitalny aplikacji. Wyświetla logo i przycisk nawigacyjny do ekranu głównego.
* ZoneContext.js: Kontekst Reacta do zarządzania wybraną strefą. Umożliwia przechowywanie i udostępnianie informacji o wybranej strefie w całej aplikacji.
* GradientButton.js: Uniwersalny komponent przycisku z gradientowym tłem. Wykorzystywany do nawigacji i interakcji użytkownika.
  
## **Uruchamianie serwera backendowego**
### 1. Pobranie Kodu Źródłowego
Najpierw umieść kod źródłowy serwera backendowego na maszynie wirtualnej lub innym urządzeniu ze skonfigurowaną domeną lub subdomeną
### 2. Uzyskanie certyfikatów potrzebnych do połączenia https
Aby umożliwić bezpieczne połączenie HTTPS dla serwera backendowego, konieczne jest uzyskanie odpowiednich certyfikatów SSL/TLS. Certyfikaty te potwierdzają tożsamość serwera i zapewniają szyfrowaną komunikację między klientem a serwerem.
### 3. Instalacja Zależności
Przejdź do katalogu z kodem źródłowym serwera backendowego i zainstaluj wszystkie wymagane zależności przy użyciu menedżera pakietów npm (Node Package Manager).  
```
cd Backend 
npm install
```
### 4. Konfiguracja Pliku .env
Stwórz plik .env z poufnymi danymi dostępowymi do bazy danych oraz ścieżkami do certyfikatów i umieść go w katalogu serwera backendowego. Upewnij się, że ten plik zawiera odpowiednie zmienne środowiskowe, na przykład:
```
DB_USER=twoja_nazwa_użytkownika
DB_PASSWORD=twoje_hasło_do_bazy
DB_SERVER=adres_bazy_danych
DB_NAME=nazwa_bazy_danych

PRIVATE_KEY_PATH=ścieżka/do/twojego/pliku/klucza/prywatnego/.pem
CERTIFICATE_PATH=ścieżka/do/twojego/pliku/certyfikatu/fullchain.pem
```
### 5. Uruchomienie Serwera
Teraz możesz uruchomić serwer backendowy, korzystając z komendy:  
`node server.js`  
Serwer będzie dostępny pod adresem 'https://adres-maszyny-wirtualnej/domeny'
### 6. Ustawienie API serwera w aplikacji
Otwórz plik api.js i zmień API_URL na adres z poprzedniego punktu np.  
`const API_URL = 'https://adres-maszyny-wirtualnej/domeny';`
