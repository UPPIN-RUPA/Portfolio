type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    tech: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "Rupa Uppin | AI & Machine Learning Portfolio",
    fullName: "Rupa Uppin",
    email: "uppinrupa@icloud.com",
  },
  hero: {
    name: "Rupa Uppin",
    p: [
      "AI/ML Scientist working across predictive modeling and Generative AI",
      "building source-grounded systems and data products people can trust",
    ],
  },
  contact: {
    p: "Let's connect",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What is your name?",
      },
      email: { span: "Your Email", placeholder: "What is your email?" },
      message: {
        span: "Your Message",
        placeholder: "How can I help?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content:
        "AI/ML Scientist with around five years of experience spanning business analytics, predictive modeling, natural language processing, and Generative AI. I work across the path from source data and model experiments to evaluation and production systems. Recent work includes retrieval-augmented financial research, telecom churn prediction, and analytics for enterprise backup and license renewals. I care about evidence, clear model tradeoffs, and building tools that help people make better-informed decisions.",
    },
    experience: {
      p: "What I have done so far",
      h2: "Experience.",
    },
    feedbacks: {
      p: "Recommendations",
      h2: "Testimonials.",
    },
    works: {
      p: "Selected work",
      h2: "Projects.",
      content:
        "From financial research copilots to customer churn models, I connect data, machine learning, and production workflows to questions that matter to people using the results.",
    },
    tech: {
      p: "AI, ML & production systems",
      h2: "My toolkit.",
    },
  },
};
