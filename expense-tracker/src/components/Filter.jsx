import React from 'react';

const Filter = ({ setFilter }) => {
    return (
        <input 
            type="text" 
            onChange={(e) => setFilter(e.target.value)} 
            placeholder="Filter by category..." 
            className="p-3 bg-gray-700 text-white rounded-md w-full mb-4"
        />
    );
};

export default Filter;
