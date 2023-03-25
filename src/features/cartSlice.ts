import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mainMenu } from '../services/mainMenu';

const initialState = {
    quantity: 0,
    menu: mainMenu,
    totalPrice: 0,
    itemsInCart: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string>) => {
            const index = state.menu.findIndex(a => a.id === action.payload);
            state.menu[index].qty += 1;
            state.totalPrice += state.menu[index].price;
            state.itemsInCart += 1;
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const index = state.menu.findIndex(a => a.id === action.payload);
            if (state.menu[index].qty >= 1) {
                state.menu[index].qty -= 1;
                state.totalPrice -= state.menu[index].price;
                state.itemsInCart -= 1;
            }
        },
        clearCart: (state) => {
            state.menu.forEach(m => m.qty = 0);
            state.totalPrice = 0;
            state.itemsInCart = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
