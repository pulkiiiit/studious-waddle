"use client"
import * as React from "react"
import { bannerImg } from "@/lib/heroimg"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Header from "./header"

export function Hero() {
  return (
    <div>
      <Header/>
      <div className="flex justify-center items-center">
        <Carousel
        plugins={[Autoplay({
          delay :1000,
          stopOnInteraction : false,
          stopOnMouseEnter : true,
        })]}
            opts={{
            align: "start",
            }}
            className="w-full"
        >
      <CarouselContent>
        {bannerImg.map((b) => (
          <CarouselItem key={b.id}>
            <div className="relative w-full h-full">
              <Card className="w-full h-full">
                <CardContent className="relative w-screen h-[400px]">
                  <Image src= {b.img} alt={b.name} fill className="object-cover rounded-xl"></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
    </Carousel>
    </div>
    </div>
  )
}
