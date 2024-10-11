import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = {
            id: Date.now(),
            amount: parseFloat(amount),
            description,
            category,
        };
        addExpense(expense);
        setAmount('');
        setDescription('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-5 rounded-xl shadow-lg mb-6">
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" className="p-3 bg-gray-700 text-white rounded-md w-full mb-4"/>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="p-3 bg-gray-700 text-white rounded-md w-full mb-4"/>
            <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" className="p-3 bg-gray-700 text-white rounded-md w-full mb-4"/>
            <button type="submit" className="bg-mint-500 text-white py-2 px-4 rounded-full hover:bg-mint-600 w-full">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
