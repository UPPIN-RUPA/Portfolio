import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  aws,
  snowflake,
  python,
  sql,
  java,
  csharp,
  spring,
  django,
  aspnet,
  mongodb,
  tableau,
  ssrs,
  powerbi,
  git,
  jenkins,
  jira,
  dbt,
  park,
  hcltech,
  temenos,
  inmovidu,
  vosyn,
  carrent,
  jobit,
  tripguide,
  battleship,
  inventory,
  mentoring,
  farmbazaar,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "tech", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Cloud & Data Engineer", icon: backend },
  { title: "Backend Developer", icon: web },
  { title: "Analytics Engineer", icon: mobile },
  { title: "ETL & Reporting Specialist", icon: creator },
];

const technologies: TTechnology[] = [
  { name: "AWS", icon: aws },
  { name: "Snowflake", icon: snowflake },
  { name: "DBT", icon: dbt },
  { name: "Python", icon: python },
  { name: "SQL", icon: sql },
  { name: "Java", icon: java },
  { name: "C#", icon: csharp },
  { name: "Spring Boot", icon: spring },
  { name: "Django REST", icon: django },
  { name: "ASP.NET MVC", icon: aspnet },
  { name: "MongoDB", icon: mongodb },
  { name: "Tableau", icon: tableau },
  { name: "SSRS", icon: ssrs },
  { name: "Power BI", icon: powerbi },
  { name: "Jenkins", icon: jenkins },
  { name: "Git", icon: git },
  { name: "Jira", icon: jira },
];

const experiences: TExperience[] = [
  {
    title: "Data Engineer",
    companyName: "Park National Bank",
    icon: park,
    iconBg: "#b98f68",
    date: "Aug 2025 - Present",
    points: [
      "Architected and operated fault-tolerant AWS Glue to Snowflake ETL pipelines for multi-million record financial datasets across DEV/QA/PROD.",
      "Designed Snowflake dimensional models and reporting marts that reduced manual reporting effort and query latency by 60%.",
      "Built Tableau and SSRS dashboards for suspicious login behavior, browser anomalies, IP frequency shifts, and MFA gaps.",
      "Implemented historicization logic and reconciliation checks for audit-ready data models and production reporting.",
    ],
  },
  {
    title: "Application Developer",
    companyName: "Park National Bank",
    icon: park,
    iconBg: "#d7b38f",
    date: "May 2025 - Aug 2025",
    points: [
      "Enhanced enterprise banking applications using C#, ASP.NET MVC, and SQL Server for secure archival and structured reporting.",
      "Automated SSRS reporting workflows to improve compliance documentation efficiency.",
    ],
  },
  {
    title: "Software Engineer II",
    companyName: "HCLTech",
    icon: hcltech,
    iconBg: "#b98f68",
    date: "Mar 2023 - Jul 2023",
    points: [
      "Developed Java-based backend services with MySQL for enterprise e-commerce and financial systems.",
      "Designed database schemas, optimized queries, and improved backend performance reliability.",
      "Contributed to Jenkins and Git CI/CD workflows for stable multi-environment deployments.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Temenos",
    icon: temenos,
    iconBg: "#d7b38f",
    date: "Aug 2021 - Feb 2023",
    points: [
      "Built Spring Boot microservices and distributed REST APIs for secure financial transaction processing.",
      "Resolved OAuth token lifecycle vulnerability by implementing centralized logout API and gateway token-clear mechanism.",
      "Led cross-team UI branding migration across five product teams using Angular, React, Bootstrap, HTML, and CSS.",
    ],
  },
  {
    title: "Software Engineering Intern",
    companyName: "Inmovidu",
    icon: inmovidu,
    iconBg: "#b98f68",
    date: "Mar 2021 - Jun 2021",
    points: [
      "Developed backend logic using Java and SQL for secure business data processing.",
      "Assisted in frontend-backend integration and API-based workflows.",
      "Designed and optimized relational queries, improving retrieval performance and reducing redundant API calls.",
      "Implemented input validation and exception handling to improve runtime stability.",
    ],
  },
  {
    title: "AI Engineering Contributor",
    companyName: "Vosyn",
    icon: vosyn,
    iconBg: "#d7b38f",
    date: "2024",
    points: [
      "Contributed to AI-ready data workflows and model-supporting backend components.",
      "Worked on data preparation and integration patterns for scalable analytics use cases.",
      "Collaborated on implementation and validation of production-oriented AI features.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "Consumer Fraud Behavioral Analytics",
    description:
      "Engineered Snowflake transformations and Tableau dashboards to detect high-risk login behavior, IP anomalies, and MFA gaps for proactive fraud monitoring.",
    tags: [
      { name: "snowflake", color: "blue-text-gradient" },
      { name: "tableau", color: "green-text-gradient" },
      { name: "fraud-analytics", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/UPPIN-RUPA",
  },
  {
    name: "Monthly Financial Reporting Automation",
    description:
      "Built structured reporting tables and recurring KPI dashboards with Snowflake and SSRS to improve transparency and reduce manual reporting load.",
    tags: [
      { name: "ssrs", color: "blue-text-gradient" },
      { name: "etl", color: "green-text-gradient" },
      { name: "reporting", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/UPPIN-RUPA",
  },
  {
    name: "SANCHARA Cloud Microservices Platform",
    description:
      "Designed a Django REST + React + MongoDB platform for goal tracking, savings analytics, and life-planning workflows with secure role-based APIs.",
    tags: [
      { name: "django-rest", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/UPPIN-RUPA",
  },
  {
    name: "Inventory Management System",
    description:
      "Built an inventory management platform with stock tracking, transaction logging, category-wise reporting, and operational dashboards.",
    tags: [
      { name: "inventory", color: "blue-text-gradient" },
      { name: "dashboard", color: "green-text-gradient" },
      { name: "sql", color: "pink-text-gradient" },
    ],
    image: inventory,
    sourceCodeLink: "https://github.com/UPPIN-RUPA",
  },
  {
    name: "Student Mentoring System",
    description:
      "Developed a student mentoring application with mentor-mentee mapping, session tracking, progress notes, and engagement workflows.",
    tags: [
      { name: "mentoring", color: "blue-text-gradient" },
      { name: "workflow", color: "green-text-gradient" },
      { name: "web-app", color: "pink-text-gradient" },
    ],
    image: mentoring,
    sourceCodeLink: "https://github.com/UPPIN-RUPA",
  },
  {
    name: "Farm Bazaar",
    description:
      "Built a farm-to-market marketplace concept enabling produce listings, local buyer discovery, and simplified order/inventory management for farmers.",
    tags: [
      { name: "marketplace", color: "blue-text-gradient" },
      { name: "agri-tech", color: "green-text-gradient" },
      { name: "full-stack", color: "pink-text-gradient" },
    ],
    image: farmbazaar,
    sourceCodeLink: "https://github.com/UPPIN-RUPA",
  },
  {
    name: "Battleship Game - Java OOP Architecture",
    description:
      "Designed and implemented a fully object-oriented Battleship simulation with modular classes, dual-board state management, placement validation, and hit detection rules.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "oop", color: "green-text-gradient" },
      { name: "game-logic", color: "pink-text-gradient" },
    ],
    image: battleship,
    sourceCodeLink: "https://github.com/UPPIN-RUPA",
  },
];

export { services, technologies, experiences, testimonials, projects };
