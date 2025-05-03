import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from './expensesSlice';
import booksReducer from './bookSlice';
import moviesReducer from './movieSlice';

export const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        books: booksReducer,
        movies: moviesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;