import Image from "next/image";
export default function Card({title, rating, url_image}: {title:string, rating:string, url_image:string}) {
    return (
        <div className="min-w-40 max-w-56 h-auto bg-gray-800 rounded-md">
            <div>
                <Image
                src={url_image}
                width={225}
                height={300}
                alt="Movie poster image"
                />
            </div>
            <div className="p-2">
                <h1>😭10.0</h1>
                <h1>{title}</h1>
                <h2>{rating}</h2>
            </div>
        </div>
    );
}