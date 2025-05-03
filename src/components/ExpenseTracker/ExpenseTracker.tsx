
import SectionStatistic from "../SectionStatistic/SectionStatistic.tsx";
import SectionList from "../SectionList/SectionList.tsx";
import React, {useState} from "react";
import './ExpenseTracker.css'

export type TrackerCategory = 'expenses' | 'books' | 'movies';

const ExpenseTracker: React.FC = () => {
    const [currentCategory, setCurrentCategory] = useState<TrackerCategory>('expenses');
    return (
        <main className="main-expense-tracker">
            <div className="category-switcher">
                <button onClick={() => setCurrentCategory('expenses')}>Expenses</button>
                <button onClick={() => setCurrentCategory('books')}>Books</button>
                <button onClick={() => setCurrentCategory('movies')}>Movies</button>
            </div>
            <SectionStatistic category={currentCategory} />
            <SectionList category={currentCategory} />
        </main>
    );
};

export default ExpenseTracker