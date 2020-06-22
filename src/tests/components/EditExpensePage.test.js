import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, warpper, history;
beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    warpper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[2]}
        />
    );
});

test('should render EditExpensePage', () => {
    expect(warpper).toMatchSnapshot();
});

test('Should handle editExpense', () => {
    warpper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2]);
});

test('Should handle startRemoveExpense', () => {
    warpper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startRemoveExpense).toHaveBeenCalledWith({ id: expenses[2].id });
});
