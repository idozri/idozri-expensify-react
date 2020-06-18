import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

const oneExpenseFilters = {
    text: 'gum',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(4, 'days')
};

const twoExpensesFilters = {
    text: '',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(4, 'days')
};

export { filters, altFilters, oneExpenseFilters, twoExpensesFilters };
