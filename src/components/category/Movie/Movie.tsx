import {MovieType} from './MovieType.ts'
import React from "react";
import '../index.css'

import {useDispatch} from "react-redux";
import {toggleWatched} from "../../store/movieSlice.ts";


interface MovieProps {
    movie: MovieType,
    onDelete?: (id: number) => void
}


const Movie : React.FC<MovieProps> = ({movie, onDelete}) => {
    const dispatch = useDispatch();
    return (
        <div className='item-card'>
            <strong>{movie.name}</strong>
            <div className="item-footer">
                <input
                    type='checkbox'
                    checked={movie.isWatched}
                    onChange={() => dispatch(toggleWatched(movie.id))}/>


                {onDelete && (
                    <button onClick={() => onDelete(movie.id)}>Delete</button>
                )}
            </div>
        </div>
    )
}

export default Movie