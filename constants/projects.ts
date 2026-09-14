import { Project } from "@/Interface/projects";

export const projects: Project[] = [
  {
    slug: "ai-sales-automation",
    title: "AI-Powered Sales Automation System",
    brief: "Built an AI-powered system that analyzes company documents, identifies relevant prospects, and generates grounded personalized outreach using RAG and LLMs.",
    description: `This project was developed as part of my Master’s thesis in collaboration with Aico Group Oy. The goal was to explore how large language models and retrieval-augmented generation could support early-stage B2B sales workflows.

The system analyzes annual reports and other company information to identify business pain points, evaluate company fit, and support contact identification and personalized outreach generation. A retrieval-based knowledge layer grounds generated outputs in relevant company and product information, helping improve relevance and reliability.

The project focused not only on generation, but also on designing a practical workflow around grounding, evaluation, compliance checks, and integration with an existing sales process.`,
    image: undefined,
    stack: [
      "Python",
      "LlamaIndex",
      "Gemini",
      "Hugging Face",
      "Sentence Transformers",
      "ChromaDB",
      "RAG",
      "NLP",
    ],
    url: "",
    repository: "https://github.com/Marwa-Khan/AICO-B2B-SALES-AI-AGENT",
  },
  {
    slug: "magicface-reproduction",
    title: "MagicFace Reproduction",
    brief: "Reproduced an Action Unit-controlled facial editing pipeline and evaluated its ability to modify expressions while preserving identity.",
    description: `This project focused on reproducing MagicFace, a research approach for controllable facial editing using facial Action Units as conditioning signals.

I recreated the inference and experimental pipeline and investigated how different facial expressions could be generated while maintaining the identity and visual characteristics of the original subject. In addition to qualitative results, I carried out quantitative identity-preservation evaluation to assess the generated outputs.

The project involved understanding an existing research implementation, reproducing its environment and workflow, handling model dependencies, and evaluating the reproduced results systematically.`,
    image: undefined,
    stack: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Diffusers",
      "Computer Vision",
      "Deep Learning",
      "Facial Action Units",
      "Jupyter",
    ],
    url: "",
    repository: "https://github.com/Marwa-Khan/magicface-video-synthesis-reproduction",
  },
  {
    slug: "saunatonttu",
    title: "Saunatonttu",
    brief: "Developed a Flutter-based sauna companion application using Bluetooth sensor data, session tracking, statistics, and personalized post-session insights.",
    description: `Saunatonttu is a mobile application designed to enhance the sauna experience through real-time sensor data and session tracking.

The application connects to RuuviTag sensors over Bluetooth and uses temperature and environmental readings to support sauna-session monitoring. I worked on several product features including session logic, pause and cooldown handling, onboarding improvements, all-time statistics, and personalized post-session insights.

The project gave me hands-on experience working across mobile development, Bluetooth communication, sensor data, application state, UI behavior, and user-focused product development.`,
    image: undefined,
    stack: [
      "Flutter",
      "Dart",
      "Bluetooth Low Energy",
      "RuuviTag",
      "Sensor Data",
      "Mobile Development",
    ],
    url: "",
    repository: "",
  },
  {
    slug: "expense-budget-tracker",
    title: "Expense Budget Tracker",
    brief: "Built a microservices-based expense tracking platform for managing financial data, user accounts, and notifications across containerized services.",
    description: `The Expense Budget Tracker is a web-based personal finance application designed around a microservices architecture.

The system separates authentication, expense management, account functionality, and notification processing into independent services. Each service uses its own PostgreSQL database, while RabbitMQ supports asynchronous communication for background tasks such as email notifications.

The services were containerized using Docker and orchestrated locally with Docker Compose. The application was also deployed using Kubernetes on CSC Rahti, giving the project a strong focus on backend architecture, service communication, containerization, and cloud-native deployment.`,
    image: undefined,
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "RabbitMQ",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "CSC Rahti",
      "REST APIs",
      "Microservices",
    ],
    url: "",
    repository: "https://github.com/Marwa-Khan/Micro_Services_Budget_Tracker/tree/master",
  },
];
