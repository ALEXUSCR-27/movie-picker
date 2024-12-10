import { useState } from "react"

export default function SearchBar() {
    const [search_value, setSearchValue] = useState("");

    const handleSearch = () => {
        console.log(search_value);
        setSearchValue("");
    }

    return (
        <div className="flex justify-center">
            <input className="w-3/12 text-black" value={search_value} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search movie by name"></input>
            <button className="pl-3" onClick={() => handleSearch()}>Search</button>
        </div>
    )
}