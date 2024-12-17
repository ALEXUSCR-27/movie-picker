import { useState } from "react"
import { getMovies } from "../services/search_movie";
import { SetDataFunction } from "../types/functions";
import { card_data } from "../types/params";

export default function SearchBar( {set_data_results}: {set_data_results:SetDataFunction}) {
    const [movie_title, setMovieTitle] = useState("");

    const handleSearch = async () => {
        console.log(movie_title);
        const search_movie = {movie_title:movie_title}
        try {
            const response = await getMovies(search_movie);
            if (response) {
                set_data_results({data_results: response})
            }
        } catch(error) {
            console.log(error)
        }

        setMovieTitle("");
    }

    return (
        <div className="flex justify-center">
            <input className="w-3/12 text-black" value={movie_title} onChange={(e) => setMovieTitle(e.target.value)} placeholder="Search movie by name"></input>
            <button className="pl-3" onClick={() => handleSearch()}>Search</button>
        </div>
    )
}