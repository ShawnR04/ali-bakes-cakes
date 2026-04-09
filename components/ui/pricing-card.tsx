import Link from "next/link";
import Image from 'next/image';

// 1. Define exactly what data this card needs
interface PricingCardProps {
  title: string;
  path: string;
  image: string;
}

export default function PricingCard({ title, path, image }: PricingCardProps){
    return(
        <Link href={path}
            className="group relative block overflow-hidden rounded-2xl shadow-md hover:scale-101 transition-transform duration-300"
        >
            <div className="relative h-64 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover brightness-80 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-secondary-foreground">
                    <h2 className="text-3xl font-bold">
                        {title}
                    </h2>
                    <span className="bg-primary px-4 py-2 rounded-full">
                        Learn More &rarr;
                    </span>
                </div>
            </div>
        </Link>
    );
}