import Image from 'next/image';

// 1. Define exactly what data this card needs
interface ImageCardProps {
  image: string;
}

export default function ImageCard({image}: ImageCardProps){
    return(
        <>
            <div className="group relative block shadow-md aspect-square w-full">
                <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                />
            </div>
        </>
    );
}