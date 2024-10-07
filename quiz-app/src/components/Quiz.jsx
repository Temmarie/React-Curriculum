// src/components/Quiz.jsx
import React, { useState } from 'react';

// Quiz component which takes 'questions' and 'handleQuizCompletion' as props
const Quiz = ({ questions, handleQuizCompletion }) => {
      // State to keep track of the current question index, initialized to 0
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
     // State to keep track of the user's score, initialized to 0
    const [score, setScore] = useState(0);
       // State to control the visibility of feedback messages, initialized to false
    const [showFeedback, setShowFeedback] = useState(false);
        // State to store the feedback message, initialized to an empty string
    const [feedbackMessage, setFeedbackMessage] = useState('');

      // Getting the current question based on the current question index
    const currentQuestion = questions[currentQuestionIndex];

    // Function to handle the user's answer
    const handleAnswer = (isCorrect) => {
          // Show the feedback message
        setShowFeedback(true);
        if (isCorrect) {
            setFeedbackMessage('Correct!');
            setScore(score + 1);
        } else {
            setFeedbackMessage('Wrong!');
        }

          // Set a timeout to hide the feedback message and move to the next question after 1 second
          setTimeout(() => {
            // Hide the feedback message
            setShowFeedback(false);
            // If there are more questions left
            if (currentQuestionIndex < questions.length - 1) {
                // Move to the next question
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                // If no more questions are left, call the handleQuizCompletion function with the final score
                handleQuizCompletion(score);
            }
        }, 1000); // Delay of 1000 milliseconds (1 second)
    };

    return (
        <div className="bg-gray-900 text-white p-4">
              {/* Displays the current question */}
            <h2 className="text-xl mb-4">{currentQuestion.question}</h2>
            <div className="flex flex-col space-y-4">
                    {/* Maps over the answers array and creates a button for each answer */}
                {currentQuestion.answers.map((answer, index) => (
                    <button
                        key={index}
                        className="bg-indigo-500 px-4 py-2 rounded-lg"
                        onClick={() => handleAnswer(answer.isCorrect)}
                    >
                        {answer.text} {/**Displays answer */}
                    </button>
                ))}
            </div>

            <div className="mt-4">
                {showFeedback && <p>{feedbackMessage}</p>}
            </div>

            <p className="mt-4">Question {currentQuestionIndex + 1} of {questions.length}</p>
        </div>
    );
};

export default Quiz;
