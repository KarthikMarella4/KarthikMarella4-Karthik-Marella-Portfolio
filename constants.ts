import { Project, Skill, Certification, Internship } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "GLAUCOMA DETECTION USING DEEP LEARNING",
    role: "Deep Learning",
    year: "2024",
    image: "https://images.pexels.com/photos/5766072/pexels-photo-5766072.jpeg", 
    category: "Medical AI",
    description: "Automated diagnosis system utilizing Convolutional Neural Networks (CNNs) to detect glaucoma from retinal fundus images with high accuracy.",
    link: "https://github.com/KarthikMarella4/GLAUCOMA-DETECTION-USING-DEEP-LEARNING"
  },
  {
    id: 2,
    title: "EventSync",
    role: "Prompt Engineering",
    year: "2025",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    category: "Progressive Web App",
    description: "EventSync is a progressive web app (PWA) built to simplify how friends and families plan, manage, and experience events together. The platform allows users to effortlessly create and join events, coordinate details, and share memories through collaborative photo galleries in real time.",
    link: "https://eventsyncaddevent.netlify.app/"
  }
];

export const SKILLS: Skill[] = [
  { id: 1, title: "GenAI", detail: "LangChain / RAG / Prompt Engineering / ChromaDB" },
  { id: 2, title: "Cloud & DevOps", detail: "AWS / Azure / Docker / Jenkins / GitHub Actions / Prometheus / Grafana" },
  { id: 3, title: "Backend & API", detail: "Python / FastAPI / Django / SQL" },
  { id: 4, title: "Tools & Platforms", detail: "NumPy / Pandas / Git / MLflow / Airflow / n8n / ETL / DVC" },
];

export const CERTIFICATIONS: Certification[] = [
  { 
    id: 1, 
    title: "AWS Certified Cloud Practitioner", 
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/bf8bd8db-5458-4f9a-af79-75540bfa87d0/linked_in_profile"
  },
  { 
    id: 2, 
    title: "Azure Administrator Associate", 
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/KarthikMarella-0665/65CA0E456D6F8D8E?sharingId=37A46769027B9626"
  },
  { 
    id: 3, 
    title: "Azure AI Fundamentals", 
    issuer: "Microsoft",
    link: "https://www.credly.com/badges/35e360b4-ffdf-459c-941a-f4389d7f287e/linked_in_profile"
  },
  { 
    id: 4, 
    title: "AI Certified Foundations Associate", 
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=F0C2C09086512FDD784385B2D789BBF18DA614C37554D70D32A635DC4C5A8599"
  },
];

export const INTERNSHIPS: Internship[] = [
  {
    id: 1,
    role: "AWS DevOps Intern",
    company: "Technical Hub",
    period: "Jun 2022 - Aug 2023",
    description: [
      "Implementing Continuous Integration and Continuous Deployment pipelines using AWS services like CodePipeline, CodeBuild, and CodeDeploy.",
      "Support the provisioning and management of scalable AWS infrastructure using tools like AWS CloudFormation and Terraform.",
      "Help set up logging, monitoring, and alerting with CloudWatch and ensure basic security compliance using IAM roles, policies, and security groups.",
      "Set up and manage monitoring tools like Prometheus and Grafana to track system performance and visualize key metrics.",
      "Use Git with platforms like GitHub and DagsHub for version control, code collaboration, and managing development workflows."
    ]
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "SkillDzire",
    period: "Feb 2024 - Apr 2024",
    description: [
      "Build and track reproducible machine‑learning experiments with MLflow, capturing parameters, metrics, artifacts, and model versions.",
      "Design, schedule, and monitor data‑ingestion and model‑training pipelines using Apache Airflow, with clear dependency management and automated retries.",
      "Support data preprocessing and feature engineering in Python (NumPy, Pandas) and, when needed, scalable frameworks such as Spark or AWS Glue.",
      "Package trained models in Docker containers and integrate them into CI/CD workflows for deployment on platforms like AWS SageMaker or Kubernetes.",
      "Use Git with platforms such as GitHub and DagsHub to version code, datasets, and models, enabling collaborative reviews and transparent ML lifecycle management."
    ]
  }
];