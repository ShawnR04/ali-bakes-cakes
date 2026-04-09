import Image from "next/image";
import Link from "next/link";

export default function Custom(){
    return(
        <>
            <div className="container mx-auto py-15 md:py-18 px-5">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 py-10 bg-secondary-foreground rounded-xl px-10">
                    <div className="md:w-2/3 transition-all">
                        <Image 
                            src="/custom-cakes/custom-cake-1.jpeg"
                            alt=""
                            width={800}
                            height={500}
                            className='w-full transition-all rounded-2xl'
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl text-center font-bold text-secondary">
                            Custom Cakes
                        </h1>
                        <ul className="pl-5">
                            <li className="">
                                6” three layers (8-12 servings) - $115 and up
                            </li>
                            <li className="">
                                8”  two layers (14-18 servings) - $125 and up
                            </li>
                            <li className="">
                                For 20+ servings, please contact for pricing.
                            </li>
                        </ul>
                        <p className="max-lg:text-center">
                            The above prices are starting prices for basic buttercream 
                            cakes. Final cost depends on the complexity of the design.
                        </p>
                        <p className="max-lg:text-center">
                           A variety of flavours available. 
                        </p>
                        <p className="max-lg:text-center">
                            Have a special treat you would like added 
                            (coconut flakes, toffee bits, shaved white or dark 
                            chocolate, chocolate/peanut butter pieces)? Just ask!
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