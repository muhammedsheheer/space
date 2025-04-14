import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuData = {
  food: [
    {
      name: "Beef burger meal",
      description: "Classic greek salad, barrel aged feta cheese, bread",
      price: 32,
    },
    {
      name: "Roasted lamb rump",
      description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
      price: 25,
    },
    {
      name: "Pan seared sea bass",
      description: "Saffron and mussel’s broth, new potatoes, edamame beans",
      price: 38,
    },
    {
      name: "King prawns and lobster",
      description: "Creamy saffron, sauce Vierge",
      price: 38,
    },
    {
      name: "Citrus cured salmon",
      description: "Horseradish creme fraiche, beetroot mousse, oil",
      price: 41,
    },
  ],
};

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 pb-12 pt-12 md:px-0 md:pb-0">
      <div className="absolute left-0 top-0">
        <Image
          src="/images/home/space/8.png"
          width={289}
          height={489}
          alt="image2"
          className="h-[500px] w-full md:h-[700px]"
        />
      </div>
      <div className="relative z-40 flex h-full w-full flex-col items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-1 md:pb-8"></div>

        <div className="mt-6 grid w-full gap-8 md:grid-cols-2 md:gap-20 2xl:gap-40">
          {/* Food Items */}
          <div className="flex flex-col gap-6 md:gap-10 md:pl-[30%]">
            <div className="flex flex-col gap-2 pb-4 md:pb-12">
              <h6 className="font-open_sans text-4xl font-[400] uppercase text-[#D3A641] md:tracking-[8px]">
                From our menu
              </h6>
            </div>
            {menuData.food.map((item, index) => (
              <div
                key={`food-item-${index}`}
                className="flex w-full flex-row items-center gap-4"
              >
                {/* Left Content */}
                <div className="flex flex-col md:w-[488px]">
                  <p className="font-inter text-base font-semibold uppercase text-[#D3A641] md:text-lg md:tracking-[3px]">
                    {item.name}
                  </p>
                  <p className="font-inter text-sm font-light text-[#afafaf] md:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Spacer with Lines */}
                <div className="flex flex-1 items-center">
                  <div className="flex w-full items-center gap-2">
                    <div className="flex-1">
                      <div className="h-[1px] w-full bg-[#D3A641]" />
                      <div className="mt-1 h-[1px] w-full bg-[#D3A641]" />
                    </div>
                    {/* Price */}
                    <p className="whitespace-nowrap font-inter text-lg font-medium uppercase tracking-[0.57px] text-[#D3A641]">
                      £{item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <Link href={"/menu"}>
                <Button className="relative z-40 mt-10 flex items-center justify-center gap-3 rounded-none bg-[#D3A641] px-7 py-7 uppercase text-black">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>

          {/* Drink Items */}
          <div className="flex flex-col gap-6 md:gap-14">
            <Image
              src="/images/home/space/7.png"
              width={289}
              height={489}
              alt="image2"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
