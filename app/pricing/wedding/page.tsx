import Image from "next/image";
import Link from "next/link";

export default function Wedding(){
    return(
        <>
            <div className="container mx-auto py-15 md:py-18 px-5">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 py-10 bg-secondary-foreground rounded-xl px-10">
                    <div className="md:w-2/3 transition-all">
                        <Image 
                            src="/wedding/wedding-cake-1.jpeg"
                            alt=""
                            width={800}
                            height={500}
                            className='w-full transition-all rounded-2xl'
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl text-center font-bold text-secondary">
                            Wedding Cakes and Treat Tables
                        </h1>
                        <p className="max-lg:text-center">
                            From single tier, semi-naked cakes to donut towers, 
                            Ali Bakes Cakes will work with you each step of the way 
                            to ensure your cake is exactly how you have envisioned it for your special day!
                        </p>
                        <p className="max-lg:text-center">
                            As each wedding order is unique to your preference, prices vary accordingly.
                        </p>
                        <p className="max-lg:text-center">
                            Please contact me and provide:
                        </p>
                        <ul className="pl-5">
                            <li className="">
                                1. Number of servings required
                            </li>
                            <li className="">
                                2. Details about the design/style 
                            </li>
                            <li className="">
                                3. Is the cake/treats the main dessert or for late night only?
                            </li>
                            <li className="">
                                4. Date of your event.
                            </li>
                        </ul>
                        <p className="max-lg:text-center">
                            A quote will be provided within 24 hours
                        </p>
                        <p className="max-lg:text-center">
                            Wedding Planning ~ I am also a certified Wedding Planner!!
                        </p>
                        <p className="font-bold max-lg:text-center">
                            If you require assistance with set up of your personal 
                            items at the venue the day of your wedding, please let me know!
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