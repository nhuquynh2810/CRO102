import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "./UserAPI";
import { getProducts } from "./ProductAPI";
import { ToastAndroid } from "react-native";
const initialState = {
    a: 0,
    b: 0,
    result: 0,
    user: null,
    products: []
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        valueA: (state, action) => {
            state.a = action.payload;
        },
        valueB: (state, action) => {
            state.b = action.payload;
        },
        addition: (state, action) => {
            state.result = state.a + state.b;
        },
        subtraction: (state, action) => {
            state.result = state.a - state.b;
        },
        multiplication: (state, action) => {
            state.result = state.a * state.b;
        },
        division: (state, action) => {
            state.result = state.a / state.b;
        },
        refresh: (state, action) => {
            state.result = 0;
        },
        getProduct: (state, action) =>{
            state.products = action.payload;
        }
    },
    //ở đây xử lí trả về kết quả của việc lấy api
    extraReducers: (builder) => {
        //Đăng nhập
        builder.addCase(login.pending, (state, action) => {
            console.log('...Pending');
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            console.log('...Login successfully');
        });
        builder.addCase(login.rejected, (state, action) => {
            console.log('...Rejected');
        });
        //Đăng ký
        builder.addCase(register.pending, (state, action) => {
            console.log('...Pending');
        });
        builder.addCase(register.fulfilled, (state, action) => {
            console.log('...Đăng ký thành công');
            state.user = action.payload;
            ToastAndroid.show('Đăng kí thành công', ToastAndroid.SHORT);
        });
        builder.addCase(register.rejected, (state, action) => {
            console.log('...Rejected');
            // ToastAndroid.show('Email đã tồn tại!', ToastAndroid.SHORT);
        });
    }

});
export const {
    valueA,
    valueB,
    addition,
    subtraction,
    multiplication,
    division,
    refresh
} = appSlice.actions;
export default appSlice.reducer;