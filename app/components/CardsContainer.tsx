import { card_data } from "../types/card_data";
import Card from "./Card";
import test from "../../public/test.json"

export default function CardsContainer({data}: {data:card_data }) {
    const dataTemp = test.titleResults.results;

    return (
        <div className="p-5 flex flex-row gap-3 w-full h-full justify-start border-gray-800 border rounded">
            <div className=" w-1/6 h-full">
                Seccion izquierda
            </div>
            <div className="rounded-sm border-slate-900 border w-full h-full grid grid-cols-5 gap-x-1 gap-y-4 overflow-y-scroll overflow-x-hidden px-2 pt-2 pb-4">
                {dataTemp.map((row, index) => (
                    <Card
                        key={index}
                        title={row.titleNameText}
                        rating={row.titleReleaseText}
                        url_image={row.titlePosterImageModel.url}
                    >
                    </Card>

                ))}
            </div>
        </div>
    )
}