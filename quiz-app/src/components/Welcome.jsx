// src/components/WelcomeScreen.jsx
import React from 'react';

const WelcomeScreen = ({ startQuiz }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome to the Quiz!</h2>
            <button
                className="bg-indigo-500 text-white px-6 py-3 rounded-lg"
                onClick={startQuiz}
            >
                Start Quiz
            </button>
        </div>
    );
};

export default WelcomeScreen;
