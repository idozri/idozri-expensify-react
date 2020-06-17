// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    const updates = action.updates;
                    return {
                        ...expense,
                        description: updates.description,
                        amount: updates.amount,
                        createdAt: updates.createdAt,
                        note: updates.note
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};
