import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MagicButton } from "./ui/magic-button";
import { MdWork } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="relative pb-20 pt-36">
      <div>
        <Spotlight/>
      </div>
      
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-primary max-w-80">
            Tubatse Katlego Moloi
          </p>

          <TextGenerateEffect
            words="Growth in Motion. Code in Production. From Curiosity to Creation."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Computer Science & Business Management graduate crafting software,
            exploring data, and documenting the journey one line at a time.
          </p>

          <a href="#portfolio">
            <MagicButton 
              title="Show My work"
              icon={ <MdWork /> }
              position='right'
            />

          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
