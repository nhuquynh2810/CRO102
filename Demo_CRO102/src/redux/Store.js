// configstore cho redux
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import reducer
import { counterReducer } from './Reducer';
import { numberReducer } from './Reducer';

// khai báo rootReducer
const rootReducer = combineReducers({
    counter: counterReducer,
    abc: counterReducer,
})

// khai báo store
const store = configureStore({
    reducer: rootReducer
})

export default store;
