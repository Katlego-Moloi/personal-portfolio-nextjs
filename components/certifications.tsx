import { useEffect } from "react";
import { certs } from "@/data";

export const Certifications = () => {
  return(
    <section className="py-20 w-full" id="certs">
      <h1 className="heading">
        My <span className="text-primary">Certifications</span>
      </h1>

      {/* Certifications infinite carousel — full width, outside the grid */}
      <div className="no-scrollbar relative flex w-full overflow-hidden mt-12 carousel-pause-on-hover">
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />
        
        {/* Set A */}
        <div className="flex w-max animate-move-left gap-8 pr-8">
          {certs.map((cert, i) => (
            <a  key={`a-${i}`} href={cert.link} target="_blank" rel="noopener noreferrer">
              <div className="flex-shrink-0 w-64 flex flex-col items-center group p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
                <img src={cert.img} alt={cert.label} className="rounded-xl flex "/>
                <p className="text-sm text-center font-bold mt-7">{cert.label}</p>
                 <span className="mt-5 w-0 h-1 bg-primary transition-all duration-300-translate-x-1/2 group-hover:w-full"></span>
              </div>
            </a>
          ))}

          {certs.map((cert, i) => (
            <a  key={`a-${i}`} href={cert.link} target="_blank" rel="noopener noreferrer">
              <div className="flex-shrink-0 w-64 flex flex-col items-center group p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
                <img src={cert.img} alt={cert.label} className="rounded-xl flex "/>
                <p className="text-sm text-center font-bold mt-7">{cert.label}</p>
                 <span className="mt-5 w-0 h-1 bg-primary transition-all duration-300-translate-x-1/2 group-hover:w-full"></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    )
};