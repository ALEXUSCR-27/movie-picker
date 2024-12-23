import Image from "next/image";
export default function Card({title, rating, release_date, url_image}: {title:string, rating:string, release_date:string, url_image:string}) {
    return (
        <div className="min-w-40 max-w-44 h-auto bg-gray-800 rounded-md">
            <div>
                <Image
                src={url_image}
                width={225}
                height={300}
                alt="Movie poster image"
                />
            </div>
            <div className="p-2">
                <h1>🎞️ {release_date}</h1>
                <h1>⭐ {rating}</h1>
                <h1>{title}</h1>
            </div>
        </div>
    );
}