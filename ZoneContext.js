import React, { createContext, useState, useContext } from 'react';

const ZoneContext = createContext();

export const useZone = () => useContext(ZoneContext);

export const ZoneProvider = ({ children }) => {
    const [selectedZone, setSelectedZone] = useState(null);

    return (
        <ZoneContext.Provider value={{ selectedZone, setSelectedZone }}>
            {children}
        </ZoneContext.Provider>
    );
};
