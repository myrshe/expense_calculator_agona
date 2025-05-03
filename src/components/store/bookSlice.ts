import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {BookType} from "../category/Book/BookType.ts";

interface BooksState {
    books: BookType[];
}

const initialState: BooksState = {
    books: [],
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<BookType>) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action: PayloadAction<number>) => {
            state.books = state.books.filter(book => book.id !== action.payload);
        },
        toggleRead: (state, action: PayloadAction<number>) => {
            const book = state.books.find(book => book.id === action.payload);
            if (book) book.isRead = !book.isRead;
        },
    },
});

export const { addBook, deleteBook, toggleRead } = booksSlice.actions;
export default booksSlice.reducer;