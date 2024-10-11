import React from 'react';

const TotalExpense = ({ expenses }) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    
    return (
        <div className="bg-gray-800 p-6 rounded-xl mt-6 mb-5 shadow-lg text-center">
            <small>Balance: </small>
            <h2 className="text-2xl text-mint-500 font-semibold">Total Expense: ${total.toFixed(2)}</h2>
        </div>
    );
};

export default TotalExpense;
