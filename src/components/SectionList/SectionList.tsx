import {AppDispatch, RootState} from "../store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import Expense from "../category/Expense/Expense.tsx";
import {deleteExpense} from "../store/expensesSlice.ts";
import React from "react";
import { TrackerCategory} from "../ExpenseTracker/ExpenseTracker.tsx";
import './SectionList.css'
import {deleteBook} from "../store/bookSlice.ts";
import {deleteMovie} from "../store/movieSlice.ts";
import Movie from "../category/Movie/Movie.tsx";
import Book from "../category/Book/Book.tsx";

type Props = {
    category: TrackerCategory;
};
const SectionList: React.FC<Props> = ({category}) => {
    const dispatch : AppDispatch = useDispatch();
    const expenses = useSelector((state: RootState) => state.expenses.expenses)
    const movies = useSelector((state: RootState) => state.movies.movies)
    const books = useSelector((state: RootState) => state.books.books)


    const handleDelete = (id: number) => {
        if (category === 'expenses') {
            dispatch(deleteExpense(id))
        } else if(category === 'books') {
            dispatch(deleteBook(id))
        } else {
            dispatch(deleteMovie(id))
        }
    };

    if (category === 'expenses' && expenses.length === 0) {
        return <section className="section-list"><p>Add your first Expense!</p></section>
    }
    if (category === 'books' && books.length === 0) {
        return <section className="section-list"><p>Add your first Book!</p></section>
    }
    if (category === 'movies' && movies.length === 0) {
        return <section className="section-list"><p>Add your first Movie!</p></section>
    }
    return (
        <section className="section-list">
            {category === 'expenses' && expenses.map((item) => (<Expense key={item.id} expense={item} onDelete={handleDelete} />))}
            {category === 'movies' && movies.map((item) => (<Movie key={item.id} movie={item} onDelete={handleDelete} />))}
            {category === 'books' && books.map((item) => (<Book key={item.id} book={item} onDelete={handleDelete} />))}
        </section>
    );
}


export default SectionList