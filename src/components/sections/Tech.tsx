import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { skillGroups } from "../../constants";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

const Tech = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.tech} />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.6)}
            className="premium-glass rounded-2xl p-6"
          >
            <h3 className="theme-text-main text-lg font-bold">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="theme-text-muted rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-secondary mt-5 max-w-3xl text-sm leading-6">
        I select methods based on the task and evaluate outputs against source data, business context, and operational constraints.
      </p>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
