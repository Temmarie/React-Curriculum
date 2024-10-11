import React from 'react';

const ProfileCard = ({ name, age, occupation, hobby, profilePicture }) => {
    return (
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow max-w-sm text-center border-b-4 border-indigo-500">
            <img 
                src={profilePicture} 
                alt={name} 
                className="w-28 h-28 mx-auto rounded-full border-4 border-indigo-500 mb-4" 
            />
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-500 mt-2">{age} years old</p>
            <p className="text-gray-600 mt-1">{occupation}</p>
            <p className="text-indigo-600 font-semibold mt-3">Hobby: {hobby}</p>
            <button className="mt-4 py-2 px-4 bg-indigo-500 text-white rounded-full hover:bg-indigo-600">
                Connect
            </button>
        </div>
    );
};

export default ProfileCard;
