import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative flex h-fit w-full items-end justify-center px-4 py-12 md:h-screen md:px-[50px] md:py-20">
      <motion.div
        className="absolute left-0 hidden md:block"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/home/about/1.png"
          width={289}
          height={489}
          alt="image2"
          className="h-auto w-full md:h-[460px]"
        />
      </motion.div>
      <motion.div
        className="absolute right-8 z-50 hidden md:block"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/home/about/3.png"
          width={289}
          height={489}
          alt="image2"
          className="h-auto w-full md:h-[460px]"
        />
      </motion.div>
      <motion.div
        className="absolute right-[22%] z-50 hidden md:block"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/home/about/2.png"
          width={289}
          height={489}
          alt="image2"
          className="h-auto w-full md:h-[330px]"
        />
      </motion.div>
      <motion.div
        className="absolute left-[35%] hidden md:block"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="flex flex-col items-start justify-start gap-3">
          <p className="text-center font-inter text-3xl uppercase tracking-[3px] text-[#A27C26]">
            ABOUT US
          </p>
          <p className="max-w-[300px] font-inter lowercase text-[#A27C26] md:text-start">
            At Space Aigburth Restaurant you can always expect a warm welcome
            from our highly-trained team of international waiters and
            waitresses. The attentive staff will be happy to help in any way
            they can to make your dining experience a more pleasurable one.
          </p>
        </div>
      </motion.div>

      <div className="absolute flex h-full w-full items-start justify-center py-8">
        <p
          className="font-open_sans text-9xl font-light uppercase md:pl-[50px] md:tracking-[50px] lg:text-[450px]"
          style={{
            background: "linear-gradient(180deg, #D3A641 0%, #191717 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SPACE
        </p>
      </div>
      <div className="flex flex-col gap-6 pt-6 md:hidden">
        <motion.img
          src="/images/home/about/1.png"
          width={289}
          height={489}
          alt="image2"
          className="h-auto w-full lg:h-[460px] lg:w-[289px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="flex flex-col items-start justify-start gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="text-center font-inter text-3xl uppercase tracking-[3px] text-[#A27C26]">
            ABOUT US
          </p>
          <p className="font-inter lowercase text-[#A27C26] md:text-start">
            At Space Aigburth Restaurant you can always expect a warm welcome
            from our highly-trained team of international waiters and
            waitresses. The attentive staff will be happy to help in any way
            they can to make your dining experience a more pleasurable one.
          </p>
        </motion.div>
        <motion.img
          src="/images/home/about/2.png"
          width={289}
          height={489}
          alt="image2"
          className="h-auto w-full lg:h-[460px] lg:w-[289px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.img
          src="/images/home/about/3.png"
          width={289}
          height={489}
          alt="image2"
          className="h-auto w-full lg:h-[460px] lg:w-[289px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}

export default About;
