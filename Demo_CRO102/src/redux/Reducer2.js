import { createAction, createReducer } from '@reduxjs/toolkit'

// khai báo state dùng chung
const initialState = {
    numbers: []
}

// khai báo các action của reducer
const addItem = createAction('ADD_ITEM')
const removeItem = createAction('REMOVE_ITEM')

// khai báo reducer
const numberReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(addItem, (state) => {
                state.numbers.push()
            })
            .addCase(removeItem, (state) => {
                state.count -= 1
            })
    }
)

export { addItem, removeItem, numberReducer }