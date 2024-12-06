import { card_data } from "../types/card_data";

export default function CardsContainer({data}: {data:card_data }) {
    return (
        <div className="p-5 flex flex-row gap-3 w-full h-full justify-start">
            <div className=" w-1/6 h-full">
                Seccion izquierda
            </div>
            <div className="bg-slate-700 w-full h-full">
                <h2>{data.title}</h2>
            </div>
        </div>
    )
}