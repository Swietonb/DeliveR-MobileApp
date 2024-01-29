import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import GradientButton from './GradientButton';
import { LinearGradient } from 'expo-linear-gradient'; 

const SplashScreen = ({ navigation }) => {
  const navigateToApp = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <LinearGradient
      colors={['#181818','#181818', '#191919', '#191919', '#191919']} 
      style={styles.container}
    >
      <View style={styles.content}>
        <Image 
          source={require('./assets/DelivR.png')} 
          style={styles.imageStyle} 
        />
        <Text style={styles.textStyle}>Zaczynajmy!</Text>
        <GradientButton onPress={navigateToApp} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textStyle: {
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'NovaSquare',
    fontSize: 40,
    textAlign: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginBottom: 80,
  },
});

export default SplashScreen;
