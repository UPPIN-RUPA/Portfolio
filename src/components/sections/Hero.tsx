import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
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
    <section className="relative mx-auto min-h-screen w-full overflow-hidden">
      <div
        className={`mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-start gap-6 pb-16 pt-[170px] sm:pt-[190px] md:grid-cols-[auto,1fr,0.9fr] ${styles.paddingX}`}
      >
        <div className="mt-2 flex flex-col items-center justify-start">
          <div className="theme-accent-bg h-5 w-5 rounded-full" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="max-w-3xl">
          <h1 className={`${styles.heroHeadText} font-heading !leading-[1.08]`}>
            Hi, I'm <span className="theme-accent-text">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3`}>
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

        <div className="pointer-events-none hidden w-full justify-end self-end md:flex">
          <img
            src={heroComputer}
            alt="Computer visual"
            className="w-[92%] max-w-[520px] object-contain opacity-90"
          />
        </div>
      </div>

      <div className="xs:bottom-10 absolute bottom-16 z-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
