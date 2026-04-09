import Image from "next/image";
import Link from "next/link";

export default function Wedding(){
    return(
        <>
            <div className="container mx-auto py-15 md:py-18 px-5">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 py-10 bg-secondary-foreground rounded-xl px-10">
                    <div className="md:w-2/3 transition-all">
                        <Image 
                            src="/classic/classic-cake-1.jpeg"
                            alt=""
                            width={800}
                            height={500}
                            className='w-full transition-all rounded-2xl'
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl text-center font-bold text-secondary">
                            Classic Birthday Cake
                        </h1>
                        <p className="max-lg:text-center">
                            Choose any colour buttercream.
                        </p>
                        <p className="max-lg:text-center">
                            Matching sugar dust and/or sprinkles are included!
                        </p>

                        <ul className="pl-5">
                            <p className="">
                                6”cake(8-10 servings)-$85
                            </p>
                            <p className="">
                                8”cake(14-17 servings)-$95
                            </p>
                            <p className="">
                                Add number cake topper for $10
                            </p>
                            <p className="">
                                Add buttercream drip for $5;
                            </p>
                            <p className="">
                                Add chocolate drip for $8
                            </p>
                            <p className="">
                                Add macarons for $3.50 each.
                            </p>
                        </ul>
                        <Link href="/contact" className=" bg-primary text-secondary-foreground text-xl h-12 px-5 flex items-center justify-center rounded-full hover:scale-105 transition-all duration-300 z-10">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}