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
  };
};

export const config: TConfig = {
  html: {
    title: "Rupa Uppin Portfolio",
    fullName: "Rupa Uppin",
    email: "uppinrupa@icloud.com",
  },
  hero: {
    name: "Rupa Uppin",
    p: [
      "Software Developer, Java Developer, and Cloud & Data Engineer",
      "building secure data platforms, analytics, and scalable backend systems",
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
        "Software Engineer and Cloud Data Engineer with 4+ years of experience building scalable backend systems and data platforms in banking and fintech environments. I specialize in designing reliable APIs, microservices, and cloud-native data pipelines using Java, Spring Boot, Python, Snowflake, and AWS. My work focuses on transforming complex financial data into secure, high-performance systems that support fraud detection, compliance reporting, and business intelligence. Known for quickly understanding complex systems, improving data reliability and performance, and delivering solutions that enable teams to make faster, data-driven decisions. Passionate about building robust engineering solutions that combine strong software architecture with modern data engineering practices.",
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
        "These projects showcase my work in cloud data engineering, reporting automation, and secure backend architecture. Each one reflects production-focused design, measurable business impact, and scalable implementation.",
    },
  },
};
