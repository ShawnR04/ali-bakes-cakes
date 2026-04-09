import Image from "next/image";
import Link from "next/link";

export default function Wedding(){
    return(
        <>
            <div className="container mx-auto py-15 md:py-18 px-5">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 py-10 bg-secondary-foreground rounded-xl px-10">
                    <div className="md:w-2/3 transition-all">
                        <Image 
                            src="/cupcakes/cupcake-1.jpeg"
                            alt=""
                            width={800}
                            height={500}
                            className='w-full transition-all rounded-2xl'
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl text-center font-bold text-secondary">
                           Cupcakes
                        </h1>
                        <p className="max-lg:text-center">
                            Regular size cupcakes start at $400
                        </p>
                        <p className="max-lg:text-center">
                            Minimum 2 dozen order.
                        </p>
                        <p className="max-lg:text-center">
                            Mini cupcakes start at $2.35 each
                        </p>
                        <p className="max-lg:text-center">
                            Coloured pearls, luster dust, gold leaf, fondant flowers, etc can all be added for a nominal fee.
                        </p>
                        <p className="max-lg:text-center">
                            Cupcakes can also be filled with buttercream or flavoured jams.
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