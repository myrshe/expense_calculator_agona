import {BookType} from './BookType.ts'
import React from "react";
import '../index.css'
import {useDispatch} from "react-redux";
import {toggleRead} from "../../store/bookSlice.ts";

interface BookProps {
    book: BookType,
    onDelete? : (id: number) => void
}

const Book : React.FC<BookProps> = ({book, onDelete}) => {
    const dispatch = useDispatch();
    return (
        <div className="item-card">
            <strong>{book.title}</strong>
            <div className='item-footer'>
                <small>{book.author} </small>
                <input
                type='checkbox'
                checked={book.isRead}
                onChange={() => dispatch(toggleRead(book.id))}>
                </input>

                <button onClick={() => onDelete?.(book.id)}>Удалить</button>
            </div>
        </div>
    );
};


export default Book