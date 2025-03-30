"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";

const PozoviteNasOdmah = () => {
  return (
    <div className="bg-foreground text-primary mt-10 md:mt-20 py-10 md:py-20">
      <div className="container px-2 md:px-4 mx-auto font-bold flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <h2 className="text-xl md:text-4xl text-center ">
          Potrebne su vam sigurne i stabilne skele za vaš projekat? Obratite nam
          se još danas!
        </h2>
        <a href="tel:+381641164021">
          <motion.button
            whileHover={{ translateY: "-5px" }}
            whileTap={{ scale: 0.95 }}
            className=" text-nowrap flex gap-3 text-xl md:text-3xl items-center text-muted-foreground bg-muted rounded-lg px-4 md:px-8 md:py-3 py-2"
          >
            <PhoneIcon /> Pozovite odmah
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
