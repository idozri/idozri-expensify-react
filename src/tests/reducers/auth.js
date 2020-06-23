import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 123
    };

    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid fro logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'anythig' }, action);
    expect(state.uid).toEqual({});
});
