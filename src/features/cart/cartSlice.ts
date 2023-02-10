import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mainMenu } from '../../services/mainMenu';

//אם לא משתמשת ברדיוסרים של העגלה שסופרת פריטים לכל אחד, למחוק מכאן את כל מה שמיותר
//ולתת טייפ לאינישיאל סטייט
const initialState = {
    itemsInCart: 0,
    menu: mainMenu,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.itemsInCart += action.payload
        },
        removeFromCart: (state, action) => {
            state.itemsInCart -= action.payload;
            if (state.itemsInCart < 0) { state.itemsInCart = 0 };
        },
        cart: (state, action: PayloadAction<string>) => {
            const index = state.menu.findIndex(a => a.id === action.payload);
            if (index !== -1) {
                state.menu[index].inCart = !state.menu[index].inCart;
            }

            if (state.menu[index].inCart) {
                state.totalPrice += state.menu[index].price
            }

            if (!state.menu[index].inCart) {
                state.totalPrice -= state.menu[index].price
            }
        },
        clearCart: (state) => {
            state.menu.forEach(m => m.inCart = false);
            state.totalPrice = 0;
        },
        shippingPrice: (state) => {
            state.menu.forEach(m => {
                state.totalPrice += m.price
            })
        }
    }
});

export const { addToCart, removeFromCart, cart, clearCart, shippingPrice } = cartSlice.actions
export default cartSlice.reducer
