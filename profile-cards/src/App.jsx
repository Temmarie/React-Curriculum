// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import profiles from './components/ProfileData';

function App() {
  return (
    <div className="min-h-screen bg-indigo-100">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-black text-4xl text-center font-semibold mb-8">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              age={profile.age}
              occupation={profile.occupation}
              hobby={profile.hobby}
              profilePicture={profile.profilePicture}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
