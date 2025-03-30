"use client";

import Hero3 from "../public/skele5.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
      <Image
        src={Hero3}
        alt="pokretne skele"
        fill
        className="w-full h-[100dvh] object-cover"
      />

      <div className="relative container px-2 md:px-4 mx-auto text-center flex flex-col gap-6 items-center justify-center z-[1] ">
        <h1 className="text-primary md:text-5xl text-xl font-bold px-4">
          Drulovka Niš - Izdavanje i Montaža Pokretnih Skela
        </h1>
        <h2 className="text-muted font-medium md:text-5xl text-md">
          Pouzdana Rešenja za Građevinske i Industrijske Radove
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <a href="tel:+381641164021">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-muted border-muted border-[1px] rounded-lg px-4 md:px-8 md:py-3 py-2 font-medium"
            >
              Pozovite odmah
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
