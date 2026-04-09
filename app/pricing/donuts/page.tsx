import Image from "next/image";
import Link from "next/link";

export default function Wedding(){
    return(
        <>
            <div className="container mx-auto py-15 md:py-18 px-5">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 py-10 bg-secondary-foreground rounded-xl px-10">
                    <div className="md:w-2/3 transition-all">
                        <Image 
                            src="/donuts/donuts-2.jpeg"
                            alt=""
                            width={800}
                            height={500}
                            className='w-full transition-all rounded-2xl'
                        />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl text-center font-bold text-secondary">
                            Baked Cake Donuts
                        </h1>
                        <ul className="pl-5 max-lg:text-center">
                            <p className="">
                                Regular size cake donuts start at $3.25 each
                            </p>
                            <p className="">
                                (Minimum 2 dozen order)
                            </p>
                            <p className="">
                                Mini bite size donuts start at $2.10 each
                            </p>
                            <p className="">
                                Cinnamon sugar donuts (a top seller!) are $3.05 each.
                            </p>
                        </ul>
                        <p className="max-lg:text-center">
                            The baked donuts include a hardened chocolate topping (the chocolate can be coloured).
                        </p>
                        <p className="max-lg:text-center">
                            Variety of flavours available.  Add on’s such as sprinkles, flowers, marbling available for extra fee.
                        </p>
                        <p className="max-lg:text-center">
                            Donut wall rental available upon request.
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