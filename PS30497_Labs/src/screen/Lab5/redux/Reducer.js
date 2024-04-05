import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    a: 0,
    b: 0,
    result: 0
}

const valueA = createAction('VALUE_A');
const valueB = createAction('VALUE_B');
const addition = createAction('ADDITION');
const subtraction = createAction('SUBTRACTION');
const multiplication = createAction('MULTIPLICATION');
const division = createAction('DIVISION');
const refresh = createAction('REFESH');

const calculateReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(valueA, (state, action) => {
            state.a = action.payload;
        })
        .addCase(valueB, (state, action) => {
            state.b = action.payload;
        })
        .addCase(addition, (state) => {
            state.result = state.a + state.b;
        })
        .addCase(subtraction, (state) => {
            state.result = state.a - state.b;
        })
        .addCase(division, (state) => {
            state.result = state.a / state.b;
        })
        .addCase(multiplication, (state) => {
            state.result = state.a * state.b;
        })
        .addCase(refresh, (state) => {
            state.result = 0;
        });
});

export { calculateReducer, valueA, valueB, addition, subtraction, multiplication, division, refresh };
