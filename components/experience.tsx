import { useEffect } from "react";
import { workExperience, microsoftCerts, credlyCerts} from "@/data";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export const Experience = () => {
    useEffect(() => {
    // Load Credly embed script if not already loaded
    if (!document.querySelector('script[src*="credly.com"]')) {
      const script = document.createElement("script");
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, trigger re-render of badges
      if (window.CredlyBadgeWidget) {
        window.CredlyBadgeWidget.init();
      }
    }
  }, []);

  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-primary">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <HoverBorderGradient
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

      {/* Certifications infinite carousel — full width, outside the grid */}
        <div className="mt-8 w-full carousel">
          {/* Fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
            style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
            style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />

          <div className="group">
            {/* Set A */}
            {microsoftCerts.map((cert) => (
              <a key={`a-${cert.id}`} href={cert.url} target="_blank" rel="noopener noreferrer">
                <div className="card">
                  <img src={cert.badgeUrl} alt={cert.name} className="w-24 h-24 object-contain" />
                </div>
              </a>
            ))}

            {credlyCerts.map((cert) => (
              <div key={`a-${cert.id}`} className="card">
                <div
                  data-iframe-width="100"
                  data-iframe-height="180"
                  data-share-badge-id={cert.id}
                  data-share-badge-host="https://www.credly.com"
                />
              </div>
            ))}

            {/* Set B — exact duplicate for seamless loop */}
            {microsoftCerts.map((cert) => (
              <a key={`b-${cert.id}`} href={cert.url} target="_blank" rel="noopener noreferrer">
                <div className="card">
                  <img src={cert.badgeUrl} alt={cert.name} className="w-24 h-24 object-contain" />
                </div>
              </a>
            ))}
            {credlyCerts.map((cert) => (
              <div key={`b-${cert.id}`} className="card">
                <div
                  data-iframe-width="100"
                  data-iframe-height="180"
                  data-share-badge-id={cert.id}
                  data-share-badge-host="https://www.credly.com"
                />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};
