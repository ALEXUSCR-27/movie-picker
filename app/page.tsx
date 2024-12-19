"use client"

import { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import SearchBar from "./components/SearchBar";
import { card_data } from "./types/params";

export default function Home() {
    const [data, setData] = useState(Array<card_data>);

    const set_data_results = ({data_results}: { data_results: card_data[] }) => {
        console.log(data_results);
        setData(data_results);
    }

    return (
        <div>
            <main>
                <div className="p-5 w-full h-full content-center items-center">
                    <div className="p-5">
                        <SearchBar set_data_results={set_data_results}/>
                    </div>
                    <div>
                        <CardsContainer data={data}/>
                    </div>
                </div>
            </main>
        </div>
    );
}
