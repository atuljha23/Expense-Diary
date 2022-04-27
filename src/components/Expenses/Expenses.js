import './Expenses.css';
import React, { useState } from 'react';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')
    const enteredFilterYear = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const updated_array = props.items.filter(function (item) {
        return (item.date.getFullYear().toString()) === filteredYear;
    });
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onFilterChangeValue={enteredFilterYear} />
                <ExpensesChart expenses={updated_array} />
                <ExpensesList items={updated_array} />
            </Card>
        </div>
    );
}

export default Expenses;