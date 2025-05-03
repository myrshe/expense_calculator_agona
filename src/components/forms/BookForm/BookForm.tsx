import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/bookSlice.ts";
import { AppDispatch } from "../../store/store.ts";

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !author) return;

        dispatch(addBook({
            id: Date.now(),
            title,
            author,
            isRead: false,
        }));

        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <button type="submit">Добавить</button>
        </form>
    );
};

export default BookForm;