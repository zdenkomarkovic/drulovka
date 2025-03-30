"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            PR <span className="font-bold text-primary">Drulovka Niš</span> je
            specijalizovana firma za izdavanje i montažu{" "}
            <span className="font-bold text-primary">pokretnih skela</span>,
            pružajući sigurna i stabilna rešenja za visinske radove.{" "}
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            {" "}
            Sa dugogodišnjim iskustvom u industriji, naš tim obezbeđuje
            <span className="font-bold text-primary">
              visokokvalitetne skele
            </span>{" "}
            koje ispunjavaju sve sigurnosne i tehničke standarde. Bez obzira da
            li radite na građevinskom projektu, fasadnim radovima, industrijskom
            održavanju ili renoviranju objekata, naše skele su dizajnirane da
            vam pruže maksimalnu sigurnost i efikasnost.
          </p>{" "}
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Uz to pružamo{" "}
            <span className="font-bold text-primary">
              prevoz, montažu i demontažu
            </span>
            skela
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/skele6.webp"}
            width={500}
            height={800}
            alt="pokretne skele"
            className="object-cover h-[300px] md:h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
