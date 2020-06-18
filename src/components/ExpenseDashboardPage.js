import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseLitsFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

export default () => (
    <div>
        <ExpensesSummary />
        <ExpenseLitsFilters />
        <ExpenseList />
    </div>
);
