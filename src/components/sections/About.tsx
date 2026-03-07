import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt glareEnable tiltEnable tiltMaxAngleX={24} tiltMaxAngleY={24}>
    <div className="max-w-[260px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.28, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[22px] p-[1px]"
      >
        <div className="theme-surface flex min-h-[280px] flex-col items-center justify-evenly rounded-[22px] px-10 py-6">
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />

          <h3 className="theme-text-main text-center text-[20px] font-bold">{title}</h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-4xl text-[18px] leading-[32px]"
      >
        {config.sections.about.content}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
