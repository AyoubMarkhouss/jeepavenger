"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { FaArrowDownLong } from "react-icons/fa6";

export function Imagehero() {
  const images = [
    "/desert.jpg",
    "/mer.jpg",
    "/foret.jpg",
    "/montagnes.jpg",
    "/urbain.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-4xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          FREEDOM OF CHOICE
        </motion.p>
        <motion.p className="font-bold px-5 md:max-w-3xl text-lg text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          voluptates qui quidem eos error. Ratione culpa blanditiis aperiam
          eligendi necessitatibus quasi exercitationem.
        </motion.p>
        <div className="px-4 py-4 backdrop-blur-sm border bg-yellow-500/10 border-yellow-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>
            <FaArrowDownLong />
          </span>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
