"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Cities } from "@/types/enums";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import zndl from "../../public/zndl.jpeg";

export default function EventsPopular(props: { city: keyof typeof Cities }) {
  return (
    <>
      <h2 className="font-bold text-2xl mx-default-mobile-x">Популярные</h2>
      <Carousel
        className="w-full mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
          WheelGesturesPlugin(),
        ]}
      >
        <CarouselContent className="ml-[0px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[93%] md:basis-[95%]">
              <div>
                <Image
                  className="aspect-square rounded-lg object-cover"
                  src={zndl}
                  alt="Популярное событие"
                  objectFit="contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
