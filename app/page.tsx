'use client'

import Image from "next/image";
import Link from "next/link";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import CarouselCard from "@/components/ui/carousel-card";

const CAROUSEL_CONTENT = [
    { id: 1,title: 'wedding Cakes', path: '', image: '/wedding/wedding-cake-1.jpeg'},
    { id: 2, title: 'French Macarons', path: '', image: '/macarons/macaron-1.jpeg'},
    { id: 3, title: 'Classic Cakes', path: '', image: '/classic/classic-cake-1.jpeg'},
    { id: 4, title: 'Cupcakes', path: '', image: '/cupcakes/cupcake-1.jpeg'},
    { id: 5, title: 'Cake Pops', path: '', image: '/cake-pops/cake-pop-2.jpeg'},
    { id: 6, title: 'Bakes Donuts', path: '', image: '/donuts/donuts-2.jpeg'},
    { id: 7, title: 'Custom Cakes', path: '', image: '/custom-cakes/custom-cake-1.jpeg'},
    { id: 8, title: 'Dessert Tables', path: '', image: '/dessert-tables/dessert-table-1.jpeg'},

]

export default function Home() {
  const plugin = React.useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: false }),
    []
  )
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center gap-5 pt-5 mb-10 relative">
        <Image 
            src="/images/73.jpeg"
            alt=""
            width={800}
            height={600}
            className="absolute z-0 object-cover w-full h-full rounded-lg brightness-75"
          />
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl text-center text-secondary font-bold max-w-5xl leading-tight z-10">
          ALI BAKES CAKES & EVENT SERVICES
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-center text-secondary-foreground max-w-2xl z-10">
          Handcrafted cakes designed to make your special moments unforgettable
        </p>

        {/* CTA Button */}
        <Link href="/contact" className=" bg-primary text-secondary-foreground text-xl h-12 px-5 flex items-center justify-center rounded-full hover:scale-105 transition-all duration-300 z-10">
            Get A Quote
        </Link>
      </section>

      {/* Image Slider */}
      <section className="px-5">
        {/* Heading */}
        <div className="">
          <h1 className="text-4xl md:text-5xl text-secondary font-bold text-center py-5">
            What we Offer
          </h1>
        </div>

        {/* Carousel */}
        <div className=" py-5 px-15 rounded-2xl bg-secondary-foreground">
          <Carousel
            opts={{
              loop:true,
              align: "start",
            }}
            plugins={[plugin]}
            className="rounded-2xl"
          >
            <CarouselContent>
              {CAROUSEL_CONTENT.map((item) => (
                <CarouselItem key={item.id}
                  className="w-full basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="rounded-2xl">
                    <CarouselCard
                      title={item.title}
                      path={item.path}
                      image={item.image}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Manual Controls */}
            <CarouselPrevious className=" h-10 w-10 absolute top-1/2 bg-primary text-secondary-foreground hover:bg-foreground border-0 hover:text-secondary-foreground" />
            <CarouselNext className="h-10 w-10 absolute top-1/2 bg-primary text-secondary-foreground hover:bg-foreground border-0" />
          </Carousel>
        </div>
        
      </section>

      {/* About Section */}
      <section className="px-5 md:px-10 space-y-2 py-5">
        {/* Heading */}
        <div className="">
          <h1 className="text-4xl md:text-5xl text-secondary font-bold text-center">
            About Us
          </h1>
        </div>
        <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 py-10 bg-secondary-foreground rounded-xl px-10">
          {/* Image */}
          <div className=" w-full lg:w-1/2">
            <div className="relative overflow-hidden flex items-center justify-center w-full h-full ">
              <Image 
                src="/wedding/wedding-cake-1.jpeg"
                alt=""
                width={800}
                height={600}
                className="object-cover w-1/2 h-1/2 rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 p-5 rounded-lg bg-background">
            <div className="text-lg md:text-xl leading-relaxed space-y-2 ">
              <p className="">Ali Bakes Cakes is a Niagara based custom cake design & event planning company.</p>
              <p className="">I am here to bring your vision to life and to help make your event memorable and stress-free.</p>
              <p className="">Have a great day!</p>
              <p className="text-secondary font-bold text-2xl">Ali</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className=""></section>
    </>
  );
}
