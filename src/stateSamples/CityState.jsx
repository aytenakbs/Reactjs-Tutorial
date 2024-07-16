import React, { useState } from 'react';

function CityState() {
    const [city, setCity] = useState(["Adana", "Istanbul", "Tekirdağ"]);

    const OrderByCities = () => {
        const sortedCities = [...city].sort();
        setCity(sortedCities);
    };

    return (
        <div>
            <h3>{city.length}</h3>
            <button onClick={OrderByCities}>Order By</button>
            <button onClick={() => setCity([])}>Clear</button>
            <ul>
                {city.map(item=><li>{item}</li>)}
            </ul>
        </div>
    );
}

export default CityState;
