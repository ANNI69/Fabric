"use client";
import Image from "next/image";
import * as React from "react";
import { useTheme } from "next-themes";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconMessage,
  IconShirt,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SunIcon, MoonIcon } from "lucide-react";

export default function Home() {
  
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Shop",
      link: "/shop",
      icon: <IconShirt className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Cart",
      link: "/cart",
      icon: (
        <IconShoppingBag className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  const imageSrc = [
    "https://i.pinimg.com/564x/4b/00/18/4b0018f3d92dbd63f4062420e2e074d4.jpg",
    "https://i.pinimg.com/564x/c7/2f/f3/c72ff3943e92090ed98b6d9f30d1f1c1.jpg",
    "https://i.pinimg.com/564x/dc/31/6a/dc316a70341d7f311fb1e9a66dd949ab.jpg",
    "https://i.pinimg.com/564x/96/41/2b/96412b918138e376c47c832f18fb5056.jpg",
    "https://i.pinimg.com/564x/bf/7d/b3/bf7db3a2f01963bb6fe7f6726f95b253.jpg",
  ];

  return (
    <>
      <div className="relative mt-40 w-full">
        <FloatingNav navItems={navItems} />
        <div className="relative flex justify-center m-10 p-30">
          <Carousel className="w-full max-w-xs ">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={imageSrc[index]}
                          alt={"Image"}
                          width={300}
                          height={300}
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
