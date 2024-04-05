import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const AppSlice = createSlice({
    name: 'app',
    initialState: {
        count: 20,
        cart: []
    },
    reducers: {
        tang: (state, action) => {
            state.count += action.payload;
        },
        //thêm
        addItem: (state, action) => {
            //kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
            const index = state.cart.findIndex((item) => item.id.toString() == action.payload.id.toString())
            //Nếu sản phẩm đã tồn tại thì tăng số lượng lên
            if (index >= 0) {
                state.cart[index].quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }

        },
        //xóa bằng id
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id.toString() != action.payload.toString())
        },
        //sửa truyền id và quantity
        editItem: (state, action) => {
            const index = state.cart.findIndex((item) => item.id.toString() == action.payload.id.toString())
            //Nếu tăng số lượng thì +1, giảm thì + -1, phụ thuộc vào payload truyền vào bên Screen
            state.cart[index].quantity += action.payload.quantity;
            //nếu giảm về 0 thì xóa
            if (state.cart[index].quantity <= 0) {
                state.cart = state.cart.filter((item) => item.id.toString() != action.payload.id.toString())
            }
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
    }
});

export const { tang, addItem, removeItem, editItem } = AppSlice.actions;
export default AppSlice.reducer;