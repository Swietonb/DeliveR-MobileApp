import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { fetchDeliveryZones, setZone } from './api';
import { LinearGradient } from 'expo-linear-gradient';
import { GridContext } from './GridContext';
import { useZone } from './ZoneContext';

const windowWidth = Dimensions.get('window').width;

const scaleText = (size) => (windowWidth / 360) * size; 

const SelectZone = () => {
    const { gridSize } = useContext(GridContext);
    const [deliveryZones, setDeliveryZones] = useState([]);
    const { selectedZone, setSelectedZone } = useZone();

    useEffect(() => {
        const fetchZones = async () => {
            const zones = await fetchDeliveryZones();
            setDeliveryZones(zones);
        };
        fetchZones();
    }, []);

    const handleSelectZone = async (zone) => {
        setSelectedZone(zone);
        await setZone(zone.id, zone.name);
    };

    const renderGridItem = ({ item }) => {
        const itemWidth = `${100 / gridSize.cols}%`;
        const isSelected = selectedZone?.id === item.id;
        const isSmallItem = gridSize.cols > 9;
        const displayText = isSmallItem ? `S${item.id}` : `Strefa\n${item.id}`;
        return (
            <TouchableOpacity
                style={[
                    styles.gridItem,
                    { width: itemWidth },
                    isSelected && styles.selectedZone
                ]}
                onPress={() => handleSelectZone(item)}
            >
                <Text style={styles.gridItemText}>{displayText}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <LinearGradient
        colors={['#181818','#181818', '#191919', '#191919', '#191919']} 
        style={styles.container}
        >
            <Text style={styles.title}>Wybierz docelową strefę dostawy</Text>
            <FlatList
                data={deliveryZones.slice(0, gridSize.rows * gridSize.cols)}
                renderItem={renderGridItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={gridSize.cols}
                extraData={gridSize}
                contentContainerStyle={styles.gridContentContainer}
            />
            {selectedZone && (
                <View style={styles.selectedZoneInfo}>
                    <Text style={styles.selectedZoneText}>
                        Wybrana strefa: {selectedZone.name}
                    </Text>
                </View>
            )}
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
        padding: 5,
    },
    gridContentContainer: {
        flexGrow: 1,
        padding: 10,
    },
    title: {
        fontSize: scaleText(20),
        fontFamily: 'MerriweatherSans',
        color: 'white',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
      },
    gridItem: {
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: 'white', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    gridItemText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    selectedZone: {
        backgroundColor: '#c0e0ff',
        transform: [
            { perspective: 200 },  
            { rotateX: '20deg' }, 
            { translateY: 0 },  
          ],
    },
    selectedZoneInfo: {
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ccc',
        marginBottom: 50,
    },
    selectedZoneText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 15,
    },
    bottomImageContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
      },
      bottomImage: {
        width: '100%',
        height: 40,
      },
});

export default SelectZone;
