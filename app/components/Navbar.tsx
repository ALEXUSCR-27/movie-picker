import { SetDataFunction } from "../types/functions";
import SearchBar from "./SearchBar";

export default function Navbar({set_data_results}: {set_data_results:SetDataFunction}) {
    return (
        <nav className="flex justify-center items-center h-20">
            <div>
                <SearchBar set_data_results={set_data_results}/>
            </div>
        </nav>
    );
}
