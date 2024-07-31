import {createSlice, PayloadAction } from '@reduxjs/toolkit';

// Определяем интерфейс для товара
interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Определяем начальное состояние
interface CartState {
  itemsInCart: Item[];
}

const initialState: CartState = {
  itemsInCart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItemInCart: (state, action: PayloadAction<Item>) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action: PayloadAction<Number>) => {
      state.itemsInCart = state.itemsInCart.filter(sneaker => sneaker.id !== action.payload);
    }
  }
});

export const { setItemInCart } = cartSlice.actions;
export default cartSlice.reducer;
