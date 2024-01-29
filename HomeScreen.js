import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get('window').width;

const scaleSize = (size) => (windowWidth / 470) * size; 

const HomeScreen = ({ navigation }) => {
  return (
    
    <LinearGradient
      colors={['#181818','#181818', '#191919', '#191919', '#191919']} 
      style={styles.container}
    >
      <Text style={styles.title}>Witamy w Aplikacji DelivR</Text>

      
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('SelectZone')}
      >
        <LinearGradient
          start={{ x: 1, y: 1 }} 
          end={{ x: 0, y: 0 }}   
          colors={['#0866a2', '#056bad', '#3ac6fe',]}
          style={[styles.cardGradient, { borderRadius: 20 }]}
        >
          <View style={styles.cardHeader}>
            <Image
                source={require('./assets/ChooseZone.png')} 
                style={styles.cardIcon}
        />
                <View>
                    <Text style={styles.cardText}>Wybór Strefy</Text>
                    <Text style={styles.cardSubtitle}
                    >Tutaj wybierzesz strefę docelową</Text>
                </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('CurrentZone')}
      >
        <LinearGradient
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }} 
          colors={['#6f5ba0', '#c03875', '#fb5441']}
          style={[styles.cardGradient, { borderRadius: 20 }]}
        >
        <View style={styles.cardHeader}>
            <Image
                source={require('./assets/CurrentZone.png')} 
                style={styles.cardIcon}
        />
                <View>
                    <Text style={styles.cardText}>Aktualna Strefa</Text>
                    <Text style={styles.cardSubtitle}
                    >Tutaj zobaczysz aktualną strefę</Text>
                </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('GridSettings')}
      >
        <LinearGradient
          start={{ x: 1, y: 1 }} 
          end={{ x: 0, y: 0 }} 
          colors={['#f75045', '#fb623d', '#fd7741']}
          style={[styles.cardGradient, { borderRadius: 20 }]}
        >
        <View style={styles.cardHeader}>
            <Image
                source={require('./assets/GridSettings.png')} 
                style={styles.cardIcon}
        />
                <View>
                    <Text style={styles.cardText}>Ustawienia Siatki</Text>
                    <Text style={styles.cardSubtitle}
                    >Tutaj zmienisz rozmiar siatki</Text>
                </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.bottomImageContainer}>
        <Image
          source={require('./assets/DelivRtext.png')} 
          style={styles.bottomImage}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: scaleSize(28),
    fontFamily: 'MerriweatherSans',
    color: 'white',
    marginTop: scaleSize(10),
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: windowWidth * 0.80,
    marginBottom: scaleSize(20),
  },
  cardGradient: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: scaleSize(24),
    fontFamily: 'ArchivoBlack',
  },
  cardIcon: {
    width: scaleSize(55),
    height: scaleSize(55),  
    marginBottom: scaleSize(35),
  },
  cardSubtitle: {
    color: 'black',
    fontSize: scaleSize(18),
  },
  bottomImageContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  bottomImage: {
    width: '100%',
    height: scaleSize(60),
  },
});

export default HomeScreen;
