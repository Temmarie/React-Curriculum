import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpense from './components/TotalExpense';
import Filter from './components/Filter';

function App() {
    const [expenses, setExpenses] = useState([]);
    const [filter, setFilter] = useState('');

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const filteredExpenses = expenses.filter(expense => 
        expense.category.includes(filter)
    );

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <h1 className="text-4xl text-mint-500 font-semibold text-center mb-8">Expense Tracker</h1>
            <TotalExpense expenses={filteredExpenses} />
            <ExpenseForm addExpense={addExpense} />
            <Filter setFilter={setFilter} />
            <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
        </div>
    );
}

export default App;
