import { useEffect, useState } from "react";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);

    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    media.addEventListener("change", onChange);

    return () => media.removeEventListener("change", onChange);
  }, []);

  if (isMobile) {
    return (
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="theme-surface theme-border flex h-24 w-24 flex-col items-center justify-center rounded-2xl p-3"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-10 w-10 object-contain"
            />
            <p className="theme-text-muted mt-2 text-[11px] font-semibold text-center leading-3">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="h-28 w-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
