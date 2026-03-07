import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import heroComputer from "../../assets/hero-computer.svg";

const Hero = () => {
  const handleViewProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById("projects");

    if (!section) {
      window.location.hash = "projects";
      return;
    }

    const navOffset = 96;
    const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="relative mx-auto h-[100svh] min-h-[760px] w-full overflow-hidden">
      <div className="absolute inset-0 z-[2]">
        <ComputersCanvas />
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-[4] hidden items-end justify-end pr-4 pb-10 md:flex lg:pr-10">
        <img
          src={heroComputer}
          alt="Computer visual"
          className="w-[40vw] min-w-[300px] max-w-[560px] object-contain opacity-90"
        />
      </div>

      <div
        className={`relative z-10 mx-auto flex h-full max-w-7xl flex-row items-start gap-5 pt-[190px] sm:pt-[205px] ${styles.paddingX}`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="theme-accent-bg h-5 w-5 rounded-full" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <h1 className={`${styles.heroHeadText} font-heading`}>
            Hi, I'm <span className="theme-accent-text">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <motion.a
            href="#projects"
            onClick={handleViewProjects}
            whileHover={{ y: -3 }}
            className="theme-accent-text mt-8 inline-flex rounded-full border theme-accent-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em]"
          >
            View Projects
          </motion.a>
        </div>
      </div>

      <div className="xs:bottom-10 absolute bottom-32 z-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
