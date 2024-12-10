"use client"

import CardsContainer from "./components/CardsContainer";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div>
        <main>
            <div className="p-5 w-full h-full content-center items-center">
                <div className="p-5">
                    <SearchBar/>
                </div>
                <div>
                    <CardsContainer data={{title:"Toy Story"}}/>
                </div>
            </div>
        </main>
    </div>
  );
}
