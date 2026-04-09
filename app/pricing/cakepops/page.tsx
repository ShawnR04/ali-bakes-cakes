import Image from "next/image";
import Link from "next/link";

export default function Wedding(){
    return(
        <>
            <div className="container mx-auto py-15 md:py-18 px-5">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 py-10 bg-secondary-foreground rounded-xl px-10">
                    <div className="md:w-2/3 transition-all">
                        <Image 
                            src="/cake-pops/cake-pop-2.jpeg"
                            alt=""
                            width={800}
                            height={500}
                            className='w-full transition-all rounded-2xl'
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl text-center font-bold text-secondary">
                            Cake Pops & Cakesickles
                        </h1>
                        <ul className="pl-5">
                            <p className="">
                                Basic Cake Pops - start at $3.75 each.
                            </p>
                            <p className="">
                                (Minimum order of one dozen) 
                            </p>
                            <p className="">
                                Cakesicles - start at $6.00 each
                            </p>
                            <p className="">
                               Bows - additional .50 each
                            </p>
                        </ul>
                        <p className="max-lg:text-center">
                            Each treat can be individually wrapped in a clear treat bag with a curled ribbon for $1.00 each.
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