import Image from "next/image";
import React from "react";

const Space: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000] px-4 py-12 md:px-10 md:py-20">
      <div className="flex flex-col gap-10 md:gap-16">
        <div>
          <h1 className="text-center font-open_sans text-3xl font-[400] uppercase tracking-[7px] text-[#D3A641] md:text-4xl md:tracking-[9px]">
            SPACE <br />
            SUPREMACY
          </h1>
        </div>
        <div className="flex h-full w-full flex-col gap-6 md:flex-row">
          <div className="flex w-full flex-col gap-6 md:w-[25%]">
            <Image
              src="/images/home/space/1.png"
              width={289}
              height={489}
              alt="image2"
              className="h-auto w-full md:h-[400px]"
            />
            <Image
              src="/images/home/space/2.png"
              width={289}
              height={489}
              alt="image2"
              className="h-auto w-full md:h-[400px]"
            />
          </div>
          <div className="flex w-full flex-col gap-6 md:w-[50%]">
            <Image
              src="/images/home/space/3.png"
              width={289}
              height={489}
              alt="image2"
              className="h-auto w-full md:h-[400px]"
            />
            <Image
              src="/images/home/space/4.png"
              width={289}
              height={489}
              alt="image2"
              className="h-auto w-full md:h-[400px]"
            />
          </div>
          <div className="flex w-full flex-col gap-6 md:w-[25%]">
            <Image
              src="/images/home/space/5.png"
              width={289}
              height={489}
              alt="image2"
              className="h-auto w-full md:h-[250px]"
            />
            <Image
              src="/images/home/space/6.png"
              width={289}
              height={489}
              alt="image2"
              className="h-auto w-full md:h-[550px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Space;
