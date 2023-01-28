import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'
import commentsSlice from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    comments: commentsSlice
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
