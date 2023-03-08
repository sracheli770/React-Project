import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    shippingPrice: 0,
    isShipping: false
}

const shippingPrice = createSlice({
    name: 'shippingPrice',
    initialState,
    reducers: {
        addShippingPrice: (state, action: PayloadAction<number>) => {
            if (!state.isShipping) {
                state.isShipping = true
                state.shippingPrice = action.payload +35
            }

        },
        removeShippingPrice: (state, action: PayloadAction<number>) => {
            if (state.isShipping) {
                state.isShipping = false
                state.shippingPrice = action.payload 
            }
        },
    }
});

export const { addShippingPrice, removeShippingPrice } = shippingPrice.actions
export default shippingPrice.reducer