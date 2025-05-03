import React from "react";
import ExpenseForm from "../forms/ExpenseForm/ExpenseForm.tsx";
import BookForm from "../forms/BookForm/BookForm.tsx";
import './SectionStatistic.css'
import { TrackerCategory} from "../ExpenseTracker/ExpenseTracker.tsx";
import MovieForm from "../forms/MovieForm/MovieForm.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

type Props = {
    category: TrackerCategory;
};

const SectionStatistic: React.FC<Props> = ({ category }) => {

    const expenses = useSelector((state: RootState) => state.expenses.expenses)
    const books = useSelector((state: RootState) => state.books.books)
    const movies = useSelector((state: RootState) => state.movies.movies)

    const formByCategory = {
        expenses: <ExpenseForm />,
        books: <BookForm />,
        movies: <MovieForm />,
    };

    const titleByCategory = {
        expenses: 'Expense calculator',
        books: 'Books',
        movies: 'Movies',
    };

    const statsByCategory = {
        expenses: (
            <>
                <p>Number of expenses: {expenses.length}</p>
                <p>Total expenses: {expenses.length > 0 ? expenses.reduce((sum, expense) => sum + expense.amount, 0) : '-'}</p>
                <p>Min expense: {expenses.length > 0 ? Math.min(...expenses.map(expense => expense.amount)) : '-'}</p>
                <p>Max expense: {expenses.length > 0 ? Math.max(...expenses.map(expense => expense.amount)) : '-'}</p>
            </>
        ),
        books: `Number of books: ${books.length}`,
        movies: `Number of movies: ${movies.length}`,
    };

    const form = formByCategory[category];
    const title = titleByCategory[category];
    const stats = statsByCategory[category];


    return (
        <section className="section-statistic">
            <div className="statistic-container">
                <h1>{title}</h1>
                <p>{stats}</p>
                {form}
            </div>
        </section>
    );
};

export default SectionStatistic;