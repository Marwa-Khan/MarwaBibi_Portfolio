import UniOulu from "../public/unioulu.jpeg";
import Enactus from "../public/enactus.png";
import Aico from "../public/aico.png";

export const experience = [
  {
    company: "Aico Group Oy",
    position: "Master's Thesis Researcher",
    time: "Jan 2026 - Jun 2026",
    description:
      "Developed an AI-powered sales automation system to support early-stage B2B sales through document analysis, contact identification, and personalized outreach.",
    task: [
      "Built a RAG pipeline using LlamaIndex, ChromaDB, sentence-transformers, and Gemini for analyzing annual reports and company documents.",
      "Designed company-fit scoring and ICP contact identification workflows to support sales prospecting and prioritization.",
      "Developed grounded, personalized outreach generation with compliance checks and CRM-oriented workflow integration.",
    ],
    logo: Aico,
  },
  {
    company: "M3S Research Unit — University of Oulu",
    position: "ML Research Intern",
    time: "May 2025- Aug 2025",
    description:
      "Worked on route decision-support research by combining routing, contextual data, and structured information for downstream machine learning tasks.",
    task: [
      "Built routing workflows using OpenStreetMap and Valhalla to extract route and mobility-related information.",
      "Integrated contextual data such as weather and represented relationships using Neo4j.",
      "Created and prepared structured datasets for future machine learning and route-ranking experiments.",
    ],
    logo: UniOulu,
  },
];
