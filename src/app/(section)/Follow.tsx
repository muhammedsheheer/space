import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="relative flex h-full w-full flex-col gap-8 bg-[#000] pt-12 md:pt-24">
      <p className="w-full text-center font-open_sans text-4xl uppercase tracking-[9px] text-[#D3A641] md:text-5xl">
        SCROLL OUR INSTAGRAM
      </p>
      <div className="relative flex w-full">
        <div className="absolute flex h-full w-full items-center justify-center">
          <Link href="https://www.instagram.com/spacebarandgrill/?hl=en">
            <div className="bg-black px-8 py-7 font-open_sans text-xl uppercase text-[#D3A641] md:text-4xl md:tracking-[10px]">
              @spacebarandgrill
            </div>
          </Link>
        </div>
        <Image
          src="/images/home/follow/1.png"
          width={188}
          height={424}
          alt="1"
        />
        <Image
          src="/images/home/follow/2.png"
          width={348}
          height={424}
          alt="1"
        />
        <Image
          src="/images/home/follow/3.png"
          width={348}
          height={424}
          alt="1"
        />
        <Image
          src="/images/home/follow/4.png"
          width={348}
          height={424}
          alt="1"
        />
        <Image
          src="/images/home/follow/5.png"
          width={348}
          height={424}
          alt="1"
        />
        <Image
          src="/images/home/follow/6.png"
          width={165}
          height={424}
          alt="1"
        />
      </div>
    </section>
  );
};

export default Follow;
