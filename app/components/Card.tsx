import Image from "next/image";
export default function Card({title, rating, release_date, url_image}: {title:string, rating:string, release_date:string, url_image:string}) {
    return (
        <div className="min-w-[13rem] max-w-[13rem] max-h-[28rem] min-h-[28rem] bg-gray-800 rounded-md flex flex-col gap-2">
            <div className="min-w-[13rem] max-w-[13rem] min-h-[14rem]">
                <Image
                src={url_image}
                width={208}
                height={224}
                alt="Movie poster image"
                />
            </div>
            <div className="h-[9rem] flex flex-col justify-between">
                <div className="flex flex-col max-h-[7rem] min-h-[7rem] p-2">
                    <h1 className="font-semibold">{title}</h1>
                    <h2>⭐ {rating}</h2>
                    <h2>🎞️ {release_date}</h2>
                </div>
                <div className="flex justify-center h-[3rem] bg-red-800 rounded-ee-sm">
                    <button>View options</button>
                </div>
            </div>
        </div>
    );
}