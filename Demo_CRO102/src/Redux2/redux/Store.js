// configstore cho redux
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import reducer
import appReducer from './Reducer';

// khai báo rootReducer
const rootReducer = combineReducers({
    app: appReducer,
})

// khai báo store
const store = configureStore({
    reducer: rootReducer
})

export default store;
