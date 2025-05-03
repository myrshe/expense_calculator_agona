import React, {useState} from "react";
import {AppDispatch} from "../../store/store.ts";
import {useDispatch} from "react-redux";
import {addMovie} from "../../store/movieSlice.ts";


const MovieForm = () => {
    const[name, setName] = useState('')
    const dispatch: AppDispatch =useDispatch();

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()
        if (!name) return;
        dispatch(addMovie({
            id:Date.now(),
            name,
            isWatched: false
        }))
        setName('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <button type='submit'>Add</button>
        </form>
    )
}


export default MovieForm