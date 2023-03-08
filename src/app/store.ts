import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice'
import commentsSlice from '../features/commentsSlice';
import shippingPrice from '../features/shippingPrice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    comments: commentsSlice,
    shippingPrice: shippingPrice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
