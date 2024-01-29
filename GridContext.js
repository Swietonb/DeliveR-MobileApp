import React, { createContext, useState } from 'react';

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
    const [gridSize, setGridSize] = useState({ rows: 5, cols: 4 });

    return (
        <GridContext.Provider value={{ gridSize, setGridSize }}>
            {children}
        </GridContext.Provider>
    );
};
