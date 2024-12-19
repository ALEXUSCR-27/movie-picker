import { card_data } from "../types/params";
import Card from "./Card";
// import test from "../../public/test.json"

export default function CardsContainer({data}: { data: Array<card_data> }) {
    //const dataTemp = test.titleResults.results;

    return (
        <div className="p-5 flex flex-row gap-3 w-full h-1/3 justify-start border-gray-800 border rounded">
            <div className=" w-1/6 h-full">
                Seccion izquierda
            </div>
            <div className="rounded-sm border-slate-900 border w-full h-full grid grid-cols-6 gap-x-0 gap-y-4 overflow-y-scroll overflow-x-hidden px-2 pt-2 pb-4">
                {data.map((row, index) => (
                    <Card
                        key={index}
                        title={row.title}
                        rating={row.release_year}
                        url_image={row.image_url}
                    >
                    </Card>

                ))}
            </div>
        </div>
    )
}