import Image from "next/image";
import Link from "next/link";

export default function Macarons(){
    return(
        <>
            <div className="container mx-auto py-15 md:py-18 px-5">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 py-10 bg-secondary-foreground rounded-xl px-10">
                    <div className="md:w-2/3 transition-all">
                        <Image 
                            src="/macarons/macaron-1.jpeg"
                            alt=""
                            width={800}
                            height={500}
                            className='w-full transition-all rounded-2xl'
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl text-center font-bold text-secondary">
                            French Macarons
                        </h1>
                        <p className="max-lg:text-center">
                            These delicate Meringue based French Macarons are a must needed addition to any dessert table, Picnic or High Tea.
                        </p>
                        <p className="max-lg:text-center">
                            Both shells and filling can be coloured to match your event colours.
                        </p>
                        <p className="max-lg:text-center">
                            Vanilla, chocolate, Coconut, Lemon, Pistachio, Strawberry, Raspberry, Blueberry, Cherry.
                        </p>
                        
                        <p className="max-lg:text-center">
                            Flavoured buttercream, ganache or Dulce de Leche Filling.
                        </p>
                        
                        <p className="font-bold">
                            Messages can be written on french macaron shells to surprise 
                            that special someone.  For example, ‘Will you be my maid of honour’, ‘will you 
                            be my valentine’, The best teacher’.
                        </p>
                        <Link href="/contact" className=" bg-primary text-secondary-foreground text-xl h-12 px-5 flex items-center justify-center rounded-full hover:scale-105 transition-all duration-300 z-10">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}