import Image from 'next/image';
import Link from 'next/link';

// 1. Define exactly what data this card needs
interface CarouselCardProps {
  title: string;
  path: string;
  image: string;
}

export default function CarouselCard({ title, path, image }: CarouselCardProps){
    return(
        <>
            <Link href={path}>
                <div className="group relative w-full aspect-square overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-end text-foreground font-bold">
                        <h1 className="bg-secondary-foreground/85 text-primary w-full h-1/3 flex justify-center items-center text-2xl rounded-2xl">
                            {title}
                        </h1>
                    </div>
                </div>
            </Link>
        </>
    );
}