import React from 'react';
import Cities from '../components/Cities/Cities';

const CitiesContainer = ({cities}) => {
    return (
        <>
            <div id="cities-container">
                { cities ? <Cities cities={cities} /> : null }
            </div>
        </>
    );
};
export default CitiesContainer;
