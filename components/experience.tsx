import { useEffect } from "react";
import { workExperience } from "@/data";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-primary">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <HoverBorderGradient
            key={card.id}
            containerClassName="rounded-4xl bg-transparent"
            as="button"
            className="flex items-center space-x-2 bg-background/70"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16 rounded-xl"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
};
