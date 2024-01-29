import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const SectionHeader = ({ title, onBackPress }) => {

    return (
        <View style={styles.header}>
          <TouchableOpacity onPress={onBackPress}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#FF8800', '#FF6600']}
              style={styles.backButton}
            >
              <Icon name="arrow-back" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    };

    const styles = StyleSheet.create({
        header: {
          backgroundColor: '#0c0c0d',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        },
        backButton: {
          marginTop: 30,
          borderRadius: 25,
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
        },
        title: {
          marginTop: 30,
          marginLeft: 45,
          flex: 1,
          color: 'white',
          fontSize: 27,
          fontFamily: 'Kanit-Bold',
        },
    });

export default SectionHeader;