import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative flex h-full w-full flex-col gap-9 bg-[#000] pb-12 pt-12 md:pb-24 md:pt-24">
      <div className="flex w-full flex-col items-center justify-center gap-3 px-[70px] md:flex-row md:justify-between">
        <div className="hidden md:block"></div>
        <p className="w-full text-center font-open_sans text-3xl font-[400] uppercase text-[#D3A641] md:w-fit md:text-4xl md:tracking-[10px]">
          EXPLORE OUR TASTE
        </p>
        <Link href={"/menu"}>
          <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#D3A641] px-7 py-7 uppercase text-black">
            View Menu
          </Button>
        </Link>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between md:gap-12 md:px-[80px] lg:px-[140px]">
        <div className="relative w-full md:w-[33%]">
          <Image
            src="/images/home/story/4.png"
            width={401}
            height={556}
            alt="logo"
            className="h-auto w-full"
          />
        </div>
        <div className="relative w-full md:w-[33%]">
          <Image
            src="/images/home/story/5.png"
            width={401}
            height={556}
            alt="logo"
            className="h-auto w-full"
          />
        </div>
        <div className="relative w-full md:w-[33%]">
          <Image
            src="/images/home/story/6.png"
            width={401}
            height={556}
            alt="logo"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
