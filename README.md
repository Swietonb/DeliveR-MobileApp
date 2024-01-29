# DelivR-MobileAppFrontend
## Opis
Aplikacja DelivR jest przeznaczona do sterowania robotem mobilnym. Umożliwia wybór strefy docelowej dla robota poprzez intuicyjny interfejs siatki stref, a także umożliwia śledzenie aktualnej lokalizacji robota. Aplikacja zawiera również sekcję ustawień, pozwalającą na dostosowanie rozmiaru siatki stref, co jest przydatne przy zmianie konfiguracji przestrzeni roboczej.

## **Zrzuty Ekranu Z Aplikacji**
<p float="left">
  <img src="https://github.com/Swietonb/DelivR-MobileAppFrontend/assets/115777585/81f5ec1f-6314-4fda-9a79-9b3c5ed49503" width="200" />
  <img src="https://github.com/Swietonb/DelivR-MobileAppFrontend/assets/115777585/88535727-9fd2-436d-8b26-656479a8b73a" width="200" /> 
  <img src="https://github.com/Swietonb/DelivR-MobileAppFrontend/assets/115777585/15a10e99-d484-4bc6-bf5b-b1382e2dd5b9" width="200" />
</p>
<p float="left">
  <img src="https://github.com/Swietonb/DelivR-MobileAppFrontend/assets/115777585/b32702c6-bb32-4c5e-8b1e-c7a3dd718983" width="200" />
  <img src="https://github.com/Swietonb/DelivR-MobileAppFrontend/assets/115777585/c65b9035-5afc-419a-bd68-6a8d26a4a84d" width="200" />
  <img src="https://github.com/Swietonb/DelivR-MobileAppFrontend/assets/115777585/630bd4b9-a8fa-43fd-9c38-3ad9a52b9c87" width="200" />
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
   `git clone https://github.com/Swietonb/DelivR-MobileAppFrontend.git`
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
