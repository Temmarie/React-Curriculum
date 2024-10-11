import React from 'react';

const ExpenseItem = ({ expense, deleteExpense }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center mb-3 shadow-md">
            <div>
                <h3 className="text-lg text-white">{expense.description}</h3>
                <p className="text-gray-400">${expense.amount} - {expense.category}</p>
            </div>
            <button 
                onClick={() => deleteExpense(expense.id)} 
                className="bg-mint-500 text-white py-2 px-4 rounded-lg hover:bg-mint-600">
                Delete
            </button>
        </div>
    );
};

export default ExpenseItem;
