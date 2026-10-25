import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  details,
  metrics,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt glareEnable tiltEnable tiltMaxAngleX={22} tiltMaxAngleY={22}>
        <div className="premium-glass w-full rounded-2xl p-5 sm:w-[320px]">
          <div className="relative h-[220px] w-full overflow-hidden rounded-2xl theme-border">
            <img src={image} alt={name} className="h-full w-full object-cover" />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              {sourceCodeLink && (
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${name} source on GitHub`}
                  className="black-gradient theme-border flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                >
                  <img src={github} alt="" className="h-1/2 w-1/2 object-contain" />
                </a>
              )}
            </div>
          </div>
          <div className="mt-5">
            <h3 className="theme-text-main text-[24px] font-bold">{name}</h3>
            <p className="text-secondary mt-2 text-[14px] leading-6">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[13px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
            className="theme-accent-text mt-5 text-xs font-semibold uppercase tracking-[0.12em]"
          >
            {expanded ? "Hide case study −" : "Explore case study +"}
          </button>
          {expanded && (
            <div className="theme-border mt-4 space-y-3 border-t pt-4">
              {details.map((detail) => (
                <p key={detail} className="text-secondary text-[13px] leading-6">
                  {detail}
                </p>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {metrics.map((metric) => (
                  <div key={metric.label} className="theme-border rounded-xl border p-3">
                    <strong className="theme-accent-text block text-lg">{metric.value}</strong>
                    <span className="theme-text-muted text-[10px] leading-4">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 max-sm:justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
