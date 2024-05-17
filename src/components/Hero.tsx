import React from "react";
import { Imagehero } from "./Imagehero";

const Hero = () => {
  return (
    <>
      <Imagehero />
      <div className="bg-black text-slate-50 pt-12">
        <p className="font-bold text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Êtes-vous plus ?
        </p>
      </div>
    </>
  );
};

export default Hero;
