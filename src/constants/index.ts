import type {
  TNavLink,
  TService,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  creator,
  mobile,
  web,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "tech", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Machine Learning", icon: backend },
  { title: "Generative AI & RAG", icon: creator },
  { title: "Financial & Telecom NLP", icon: mobile },
  { title: "Production ML Systems", icon: web },
];

const skillGroups = [
  {
    title: "AI & machine learning",
    tools: ["Predictive modeling", "XGBoost", "scikit-learn", "PyTorch", "TensorFlow", "Transformers", "NLP", "Computer vision"],
  },
  {
    title: "Generative AI & language",
    tools: ["LLMs", "RAG", "Prompt engineering", "Fine-tuning", "Hugging Face", "LangChain", "Vector databases"],
  },
  {
    title: "Data & production",
    tools: ["Python", "SQL", "Apache Spark", "Databricks", "Airflow", "AWS", "SageMaker", "MLflow", "FastAPI", "Docker", "Kubernetes", "GCP", "BigQuery", "Vertex AI", "Azure ML"],
  },
];

const experiences: TExperience[] = [
  {
    title: "AI/ML Scientist",
    companyName: "BlackRock",
    companyLabel: "BLK",
    iconBg: "#171717",
    date: "May 2025 - Present",
    points: [
      "Developed retrieval workflows for financial filings, reports, research records, and earnings-call transcripts so analysts can search source material and review grounded answers.",
      "Worked across Llama-based language models, LangChain, transformer NLP, financial extraction, and earnings-call sentiment analysis.",
      "Supported evaluation, FastAPI services, and production workflows using AWS, Spark, Airflow, MLflow, Docker, Kubernetes, and SageMaker.",
    ],
  },
  {
    title: "Data Scientist",
    companyName: "Hexaware Technologies",
    companyLabel: "HX",
    iconBg: "#ef6c39",
    date: "Aug 2021 - Jun 2023",
    points: [
      "Built a telecom churn prediction and retention analytics workflow using customer usage, billing, complaint, and support history.",
      "Engineered 140 behavioral features and developed XGBoost, BERT complaint-classification, and PyTorch LSTM models across 4.2M subscriber records.",
      "Improved Spark and Databricks feature processing and supported Airflow, MLflow, Docker, and SageMaker workflows.",
    ],
  },
  {
    title: "Data Analyst",
    companyName: "Veritas Software",
    companyLabel: "V",
    iconBg: "#4b6570",
    date: "Jan 2020 - Jul 2021",
    points: [
      "Queried 6TB of backup telemetry in Redshift and cleaned 3.5M S3-hosted records with Python and pandas.",
      "Built Tableau and Power BI reporting for storage utilization and license-renewal KPIs, including dashboards adopted by 35 regional sales managers.",
      "Used hypothesis testing and exploratory analysis to investigate backup failures and renewal trends.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "Investment Research Retrieval & NLP",
    description:
      "Predictive modeling, financial research classification, and retrieval-augmented search across investment and market information.",
    details: [
      "Analyzed portfolio and market datasets with Python, SQL, and predictive modeling; the resume reports an 18% improvement in risk-signal accuracy.",
      "Applied feature engineering and XGBoost, reducing model error by 16% on validation benchmarks; statistical analysis identified $2.4M in potential optimization opportunities.",
      "Used PyTorch, Transformers, and NLP to classify financial research; built RAG pipelines with LangChain and vector databases, and used MLflow with AWS SageMaker to shorten model deployment cycles.",
    ],
    metrics: [
      { value: "+18%", label: "risk-signal accuracy" },
      { value: "−16%", label: "model error on validation benchmarks" },
      { value: "$2.4M", label: "potential optimization opportunities identified" },
      { value: "−28%", label: "model deployment cycle time" },
    ],
    tags: [
      { name: "xgboost", color: "blue-text-gradient" },
      { name: "pytorch", color: "green-text-gradient" },
      { name: "transformers", color: "pink-text-gradient" },
      { name: "rag", color: "blue-text-gradient" },
      { name: "langchain", color: "green-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "",
  },
  {
    name: "Customer Analytics & Churn Modeling",
    description:
      "Customer segmentation, churn-indicator analysis, and behavioral forecasting across telecom and client datasets.",
    details: [
      "Analyzed customer datasets using Python, SQL, and Pandas; applied supervised learning and XGBoost to forecast customer behavior.",
      "Exploratory analysis and feature engineering surfaced $680K in potential revenue opportunities across client transaction patterns.",
      "Processed large datasets with Spark and SQL, created Tableau and Power BI reporting, and improved source consistency through ETL and validation checks.",
    ],
    metrics: [
      { value: "−17%", label: "prediction error during validation" },
      { value: "$680K", label: "potential revenue opportunities identified" },
      { value: "−34%", label: "analytical processing time" },
      { value: "+27%", label: "source-data consistency" },
    ],
    tags: [
      { name: "xgboost", color: "blue-text-gradient" },
      { name: "pytorch", color: "green-text-gradient" },
      { name: "bert", color: "pink-text-gradient" },
      { name: "mlops", color: "blue-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "",
  },
  {
    name: "Operational Data & KPI Analytics",
    description:
      "Operational data analysis and reporting across customer and product metrics, with a focus on data quality and planning insights.",
    details: [
      "Analyzed and validated operational data with Python, SQL, Pandas, and NumPy, improving dataset completeness by 26% for management reporting.",
      "Created Tableau dashboards that reduced manual reporting effort by 30%; SQL report validation improved reporting accuracy.",
      "Exploratory analysis identified $310K in potential cost-saving opportunities; statistical analysis clarified drivers behind 14% performance fluctuations.",
    ],
    metrics: [
      { value: "+26%", label: "dataset completeness" },
      { value: "−30%", label: "manual reporting effort" },
      { value: "$310K", label: "potential cost-saving opportunities" },
      { value: "14%", label: "performance fluctuations analyzed" },
    ],
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "sql", color: "green-text-gradient" },
      { name: "tableau", color: "pink-text-gradient" },
      { name: "analytics", color: "blue-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "",
  },
];

export { services, skillGroups, experiences, testimonials, projects };
