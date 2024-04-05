import { createAction, createReducer } from '@reduxjs/toolkit'

// khai báo state dùng chung
const initialState = {
    count: 20
}

// khai báo các action của reducer
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')
const incrementByAmount = createAction('INCREMENT_BY_AMOUNT')

// khai báo reducer
const counterReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(increment, (state) => {
                state.count += 1
            })
            .addCase(decrement, (state) => {
                state.count -= 1
            })
            .addCase(incrementByAmount, (state, action) => {
                state.count += action.payload
            })
    }
)

export { increment, decrement, incrementByAmount, counterReducer }