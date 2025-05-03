import {MovieType} from '../category/Movie/MovieType.ts'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface MovieState {
    movies: MovieType[]
}



const initialState: MovieState = {
    movies: [
        {
            id: Date.now(),
            name: 'It',
            isWatched: false
        },
        {
            id: Date.now() + 1,
            name: 'Interstellar',
            isWatched: true
        }
    ],
};


const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<MovieType>) => {
            state.movies.push(action.payload);
        },
        deleteMovie: (state, action: PayloadAction<number>) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload);
        },
        toggleWatched: (state, action: PayloadAction<number>) => {
            const movie = state.movies.find(movie => movie.id === action.payload);
            if (movie) movie.isWatched = !movie.isWatched;
        },
    }
})

export const { addMovie, deleteMovie, toggleWatched} = movieSlice.actions;
export default movieSlice.reducer