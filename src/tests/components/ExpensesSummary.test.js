import React from 'react';
import { shallow } from 'enzyme';
import numeral from 'numeral';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly rander ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(
        <ExpensesSummary expensesCount={1} expensesTotal={235} />
    );
    expect(wrapper).toMatchSnapshot();
});

test('should correctly rander ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary expensesCount={23} expensesTotal={21564} />
    );
    expect(wrapper).toMatchSnapshot();
});
