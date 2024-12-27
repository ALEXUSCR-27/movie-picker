import { card_data } from "../types/params";
import Card from "./Card";
// import test from "../../public/test.json"

export default function CardsContainer({data}: { data: Array<card_data> }) {
    //const dataTemp = test.titleResults.results;

    return (
        <div className="flex flex-row gap-10 justify-center min-h-[45rem] max-h-[45rem]">
            <div className=" min-w-[15%] border-zinc-600 border rounded">
                <div className="p-3 flex items-center w-full min-h-10 border-b-2 border-zinc-600">
                    <h2>
                        Filters
                    </h2>
                </div>
                <div className="p-3 flex gap-3 flex-wrap items-center w-full min-h-10">
                    <button className="bg-zinc-600 text-white rounded-md p-2">
                        Best rating
                    </button>
                    <button className="bg-zinc-600 text-white rounded-md p-2">
                        Newest
                    </button>
                </div>
            </div>
            <div className="rounded-sm min-w-[80rem] grid grid-cols-5 gap-y-4 px-2 pt-2 pb-4 overflow-auto">
                {data.map((row, index) => (
                    <Card
                        key={index}
                        title={row.title}
                        rating={row.rating}
                        release_date={row.release_year}
                        url_image={row.image_url || 'no-poster.svg'}
                    >
                    </Card>

                ))}
            </div>
        </div>
    )
}