import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="relative flex h-full w-full flex-col gap-4 bg-black py-12 md:flex-row">
      <div className="flex w-full md:w-[35%]">
        <Image
          src="/images/home/reservation/3.png"
          width={993}
          height={838}
          alt="1"
          className="h-auto w-full"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center md:w-[30%]">
        <div className="flex h-fit w-fit flex-col items-center justify-center gap-6">
          <p className="text-center font-open_sans text-3xl uppercase tracking-[9px] text-[#D3A641]">
            RESERVE YOUR
            <br /> TABLE
          </p>
          <p className="inter max-w-[350px] text-center lowercase text-white">
            Reserve your table now and enjoy a delicious dining experience at
            Space Bar & Grill! <br />
            Whether it’s a casual meal or a special occasion, we’ve got the
            perfect spot for you.
          </p>
          <Link href={"/table-booking"}>
            <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#D3A641] px-8 py-6 uppercase text-black">
              Reserve
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex w-full md:w-[35%]">
        <Image
          src="/images/home/reservation/4.png"
          width={993}
          height={838}
          alt="1"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
};

export default Reserve;
