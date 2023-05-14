import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShopCart } from '@utils/types/IShopCart';
import { toast } from 'react-toastify';

interface IState {
  cards: IShopCart[]
}

const initialState: IState = {
  cards: [],
};

const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IShopCart[]>) {
      state.cards = action.payload;
    },
    addItem(state, action: PayloadAction<IShopCart>) {
      if (!state.cards.find((item) => item.id === action.payload.id)) {
        state.cards.push(action.payload);
        localStorage.setItem('items', JSON.stringify(state.cards));
        toast.success(`Товар ${action.payload.title} добавлен в корзину`);
      }
      else {
        toast.error(`Товар ${action.payload.title} уже находится в корзине`)
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.cards = state.cards.filter((item) => item.id !== action.payload);
      localStorage.setItem('items', JSON.stringify(state.cards));
      toast.success(`Товар удален из корзины`);
    },
    incrementNumber(state, action: PayloadAction<number>) {
      const currentItem = state.cards.find((item) => item.id === action.payload);
      currentItem.number = currentItem.number + 1;
      localStorage.setItem('items', JSON.stringify(state.cards));
    },
    decrementNumber(state, action: PayloadAction<number>) {
      const currentItem = state.cards.find((item) => item.id === action.payload);
      currentItem.number = currentItem.number - 1;
      localStorage.setItem('items', JSON.stringify(state.cards));
    },
  },
});

export const { setItems, addItem, removeItem, incrementNumber, decrementNumber} = shopCartSlice.actions;

export default shopCartSlice.reducer;
