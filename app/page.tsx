"use client"

import { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Navbar from "./components/Navbar";
import { card_data } from "./types/params";

export default function Home() {
    const [data, setData] = useState(Array<card_data>);

    const set_data_results = ({data_results}: { data_results: card_data[] }) => {
        console.log(data_results);
        setData(data_results);
    }

    return (
        <div className="w-dvw flex flex-col gap-[5rem]">
            <header>
                <Navbar set_data_results={set_data_results}/>
            </header>
            <main>
                <div>
                    <CardsContainer data={data}/>
                </div>
            </main>
        </div>
    );
}
