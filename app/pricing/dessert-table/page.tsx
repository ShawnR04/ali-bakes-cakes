import Image from "next/image";
import Link from "next/link";

export default function Wedding(){
    return(
        <>
            <div className="container mx-auto py-15 md:py-18 px-5">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 py-10 bg-secondary-foreground rounded-xl px-10">
                    <div className="md:w-2/3 transition-all">
                        <Image 
                            src="/dessert-tables/dessert-table-1.jpeg"
                            alt=""
                            width={800}
                            height={500}
                            className='w-full transition-all rounded-2xl'
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl text-center font-bold text-secondary">
                            Dessert Tables
                        </h1>
                        <p className="max-lg:text-center">
                            This is where you get to choose a bit of everything!
                        </p>
                        <p className="max-lg:text-center">
                            Options: Cake pops, cupcakes (reg & mini), baked donuts 
                            (reg & mini), French macarons, cake shooters, mousse shooters, 
                            cakesicles, chocolate chip cookie sandwiches, lemon tarts, creme brulee 
                            tartlets, quiche tartlets, etc.
                        </p>
                        <p className="max-lg:text-center">
                            Delivery & Set Up Available
                        </p>
                        <p className="max-lg:text-center">
                            Please provide details below for a quote within 24 hours
                        </p>
                        <p className="max-lg:text-center">
                            Include Date of event, number of guests, if other desserts will be provided, colour theme, etc.
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