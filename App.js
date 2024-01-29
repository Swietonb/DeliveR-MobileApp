import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import { useFonts } from 'expo-font';
import HomeScreen from './HomeScreen';
import SelectZone from './SelectZone';
import CurrentZone from './CurrentZone';
import GridSettings from './GridSettings';
import SectionHeader from './SectionHeader';
import { GridProvider } from './GridContext';
import { ZoneProvider } from './ZoneContext';

const Stack = createNativeStackNavigator();


const App = () => {

  let [fontsLoaded] = useFonts({
    'ArchivoBlack': require('./assets/fonts/ArchivoBlack.ttf'),
    'MerriweatherSans': require('./assets/fonts/MerriweatherSans.ttf'),
    'NovaSquare': require('./assets/fonts/NovaSquare.ttf'),
    'Kanit-Bold': require('./assets/fonts/Kanit-Bold.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <GridProvider>
    <ZoneProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen 
            name="Splash" 
            component={SplashScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={({ navigation }) => ({
            header: () => (
            <SectionHeader
              title="Strona Główna"
              onBackPress={() => navigation.goBack()} 
          />
            ),
            })}
          />
          <Stack.Screen 
            name="SelectZone" 
            component={SelectZone} 
            options={({ navigation }) => ({
            header: () => (
            <SectionHeader
              title="Wybór Strefy"
              onBackPress={() => navigation.goBack()} 
            />
            ),
            })}
          />
          <Stack.Screen 
            name="CurrentZone" 
            component={CurrentZone} 
            options={({ navigation }) => ({
            header: () => (
            <SectionHeader
              title="Aktualna Strefa"
              onBackPress={() => navigation.goBack()} 
            />
            ),
            })}
          />
          <Stack.Screen 
            name="GridSettings" 
            component={GridSettings} 
            options={({ navigation }) => ({
            header: () => (
            <SectionHeader
              title="Ustawienia Siatki"
              onBackPress={() => navigation.goBack()} 
            />
            ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ZoneProvider>
    </GridProvider>
  );
};

export default App;
