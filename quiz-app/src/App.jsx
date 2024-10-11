// Importing React and useState hook from the 'react' library
import React, { useState } from 'react';
// Importing Navbar component from the components directory
import Navbar from './components/Navbar';
// Importing WelcomeScreen component from the components directory
import WelcomeScreen from './components/Welcome';
// Importing Instructions component from the components directory
import Instructions from './components/Instructions';
// Importing Quiz component from the components directory
import Quiz from './components/Quiz';
// Importing questions data from the components directory
import questions from './components/Questions';

// Defining the App component
// Defining the App component
const App = () => {
    // State to keep track of whether the quiz has started, initialized to false
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    // State to keep track of whether the quiz is complete, initialized to false
    const [isQuizComplete, setIsQuizComplete] = useState(false);
    // State to keep track of the final score, initialized to 0
    const [finalScore, setFinalScore] = useState(0);
    // State to keep track of whether the instructions are being displayed, initialized to true
    const [showInstructions, setShowInstructions] = useState(false);
    // State to keep track of whether the welcome screen is being displayed, initialized to true
    const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
    
    // Function to start the quiz by setting isQuizStarted to true
    const startQuiz = () => {
        setIsQuizStarted(true);
        setShowInstructions(false);
        setShowWelcomeScreen(false);
    };
  
    // Function to show instructions by setting showInstructions to true
    const showInstructionsScreen = () => {
        setShowInstructions(true);
        setShowWelcomeScreen(false);
    };
  
    // Function to handle the completion of the quiz
    const handleQuizCompletion = (score) => {
        // Set the final score to the score passed as an argument
        setFinalScore(score);
        // Set isQuizComplete to true to indicate the quiz is complete
        setIsQuizComplete(true);
    };
  
    // Function to reset the quiz state for retaking the quiz
    const retakeQuiz = () => {
        setIsQuizStarted(false); // Reset the quiz started state
        setIsQuizComplete(false); // Reset the quiz complete state
        setFinalScore(0); // Reset the final score
        setShowWelcomeScreen(true); // Show welcome screen again
    };
  
    return (
        // Main container for the app with minimum height, background color, and text color styling
        <div className="min-h-screen bg-white text-indigo-600">
            {/* Render the Navbar component */}
            <Navbar />
            {/* Conditional rendering based on the state of the quiz */}
            {showWelcomeScreen ? (
    <WelcomeScreen 
        showInstructionsScreen={showInstructionsScreen} 
        startQuiz={startQuiz}   // Ensure you pass startQuiz here
    />
) : showInstructions ? (
    <Instructions startQuiz={startQuiz} />
) : !isQuizStarted ? (
    <WelcomeScreen startQuiz={startQuiz} />
) : !isQuizComplete ? (
    <Quiz questions={questions} handleQuizCompletion={handleQuizCompletion} />
) : (
    <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-4xl font-bold">Quiz Complete!</h2>
        <p className="text-xl mt-4">Your Score: {finalScore}/{questions.length}</p>
        <button
            className="mt-6 bg-indigo-500 text-white px-4 py-2 rounded-lg"
            onClick={retakeQuiz}
        >
            Retake Quiz
        </button>
    </div>
)}

        </div>
    );
  };
  
  export default App; // Exporting the App component as the default export