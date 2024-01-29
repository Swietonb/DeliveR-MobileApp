import React, { useState, useContext } from 'react';
import { View, Image, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GridContext } from './GridContext'; 

const windowWidth = Dimensions.get('window').width;

const scaleText = (size) => (windowWidth / 360) * size; 

const GridSettings = () => {
    const { gridSize, setGridSize } = useContext(GridContext); 
    const [rows, setRows] = useState(gridSize.rows.toString());
    const [cols, setCols] = useState(gridSize.cols.toString());
    const [key, setKey] = useState(Date.now().toString());

    const handleGridSizeChange = (value, type) => {
        const num = parseInt(value, 10);
        if (!isNaN(num) && num > 0) {
            setGridSize({ ...gridSize, [type]: num });
            setKey(Date.now().toString()); 
        }
    };

    const renderGridItem = () => {
        const itemWidth = `${100 / gridSize.cols}%`;
        return (
            <View
                style={[
                styles.gridItem,
                { width: itemWidth },
                ]}
            />
        );
    };

    return (
        <LinearGradient
        colors={['#181818','#181818', '#191919', '#191919', '#191919']} 
        style={styles.container}
        >
            <Text style={styles.title}>Wybierz rozmiar siatki</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Wiersze:  </Text>
                <TextInput 
                    style={styles.input} 
                    value={rows} 
                    onChangeText={(text) => {
                        setRows(text);
                        handleGridSizeChange(text, 'rows');
                    }} 
                    keyboardType="numeric" 
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Kolumny: </Text>
                <TextInput 
                    style={styles.input} 
                    value={cols} 
                    onChangeText={(text) => {
                        setCols(text);
                        handleGridSizeChange(text, 'cols');
                    }} 
                    keyboardType="numeric" 
                />
            </View>

            <FlatList
                key={key} 
                data={Array.from({ length: gridSize.rows * gridSize.cols })}
                renderItem={renderGridItem}
                keyExtractor={(_, index) => index.toString()}
                numColumns={gridSize.cols}
                contentContainerStyle={styles.grid}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    title: {
        fontSize: scaleText(20),
        fontFamily: 'MerriweatherSans',
        color: 'white',
        marginBottom: 30,
        textAlign: 'center',
      },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    inputLabel: {
        fontSize: 14,
        marginRight: 10,
        color: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        flex: 1,
        color: 'white',
    },
    grid: {
        alignItems: 'center',
        marginTop: 10,
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
});

export default GridSettings;
