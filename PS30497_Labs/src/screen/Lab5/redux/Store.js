// configstore cho redux
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import reducer
import { calculateReducer } from '../redux/Reducer';

// khai báo rootReducer
const rootReducer = combineReducers({
    calculate: calculateReducer,
})

// khai báo store
const store = configureStore({
    reducer: rootReducer
})

export default store;
