import type { NavItem, GridItem, Project, Testimonial, Company, WorkExperience, SocialMedia } from '@/types';

export const navItems: NavItem[] = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems: GridItem[] = [
  {
    id: 1,
    title: "Building Python backends, RAG pipelines, and AI voice agents.",
    description: "Entry-Level AI/ML Engineer",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bento_grid_ml_pipeline.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to full-time AI/ML and Python backend roles",
    description: "Availability",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Python, FastAPI, LangChain, FAISS, BM25, pytest",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Building Python backends with FastAPI and REST APIs.",
    description: "Backend Focus",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Testing and hardening AI-built systems, and improving AI voice agents.",
    description: "Current Technical Focus",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Let's connect for AI/ML and Python backend roles.",
    description: "Get in Touch",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

const rawProjects: Project[] = [
  {
    id: 1,
    title: "AI Knowledge Assistant (RAG)",
    des: "Built a hybrid-retrieval pipeline (FAISS + BM25 + Sentence Transformers) over 5,000+ research documents, with cross-encoder re-ranking behind a FastAPI service to reduce hallucinations and improve answer relevance.",
    img: "/rag_architecture_system.png",
    iconLists: ["FastAPI", "LangChain", "FAISS", "BM25"],
    link: "https://github.com/ISHANSHIRODE01/AI-Knowledge-Assistant-RAG-System-",
    githubLink: "https://github.com/ISHANSHIRODE01/AI-Knowledge-Assistant-RAG-System-",
    metrics: [
      { label: "Documents", value: "5,000+" },
      { label: "Retrieval", value: "Hybrid search" },
    ],
    caseStudy: {
      overview: {
        summary: "Built a hybrid-retrieval pipeline (FAISS + BM25 + Sentence Transformers) over 5,000+ research documents, with cross-encoder re-ranking behind a FastAPI service to reduce hallucinations and improve answer relevance.",
        problem: "Base LLMs can hallucinate when answering questions over dense research documents not present in their training data.",
        businessContext: "Large research document collections are hard to search manually without missing relevant context.",
        technicalContext: "Combined dense vector retrieval (FAISS + Sentence Transformers) with sparse keyword retrieval (BM25) and cross-encoder re-ranking behind a FastAPI service.",
      },
      architecture: {
        visualPipeline: "Research Documents → Sentence Transformers → FAISS + BM25 → Cross-Encoder Re-Ranking → FastAPI",
        componentBreakdown: [
          "Retrieval Layer: Hybrid retrieval using FAISS, BM25, and Sentence Transformers over 5,000+ research documents.",
          "Re-Ranking Layer: Cross-encoder re-ranking to improve answer relevance and reduce hallucinations.",
          "API Layer: FastAPI service orchestrated with LangChain.",
        ],
        dataFlow: [
          "5,000+ research documents are indexed into FAISS and BM25.",
          "User queries retrieve candidate chunks from both FAISS and BM25.",
          "A cross-encoder re-ranks the retrieved candidates before passing context to the FastAPI response pipeline.",
        ],
        infrastructure: {
          models: "Sentence Transformers, Cross-Encoder",
          databases: "FAISS",
          caching: "None",
          apis: "FastAPI",
        },
      },
      challenges: [
        "Balancing semantic recall with exact keyword matching across 5,000+ research documents.",
        "Reducing hallucinations by filtering out low-relevance retrieved chunks before generation.",
      ],
      technicalDecisions: [
        {
          decision: "Hybrid Search (FAISS + BM25)",
          rationale: "Combining dense retrieval (FAISS + Sentence Transformers) with sparse keyword retrieval (BM25) captures both semantic meaning and exact terms.",
        },
        {
          decision: "Cross-Encoder Re-Ranking",
          rationale: "Re-ranking retrieved candidates improves answer relevance and reduces hallucinations.",
        },
      ],
      implementation: {
        backend: "Python, FastAPI",
        frontend: "N/A",
        infrastructure: "FastAPI service",
        aiPipeline: "LangChain, FAISS, BM25, Sentence Transformers, Cross-Encoder re-ranking",
      },
      results: [
        {
          metric: "Corpus Size",
          value: "5,000+",
          context: "Research documents indexed in the hybrid pipeline.",
        },
        {
          metric: "Retrieval",
          value: "Hybrid",
          context: "FAISS + BM25 with cross-encoder re-ranking.",
        },
      ],
      lessonsLearned: [
        "Hybrid retrieval (FAISS + BM25) handles technical terminology better than dense vector search alone.",
        "Cross-encoder re-ranking improves answer relevance and helps reduce hallucinations.",
      ],
      futureImprovements: [],
      recruiterTakeaways: {
        aiEngineer: "Demonstrates hybrid RAG retrieval (FAISS + BM25 + Sentence Transformers) with cross-encoder re-ranking.",
        mlEngineer: "Applies dense/sparse retrieval and cross-encoder re-ranking to reduce hallucinations.",
        startupFounder: "Addresses document search and hallucination reduction over 5,000+ research documents.",
        softwareEngineer: "Exposes the retrieval and re-ranking pipeline behind a FastAPI service.",
      },
    },
  },
  {
    id: 2,
    title: "DriftGuard-ML",
    des: "Built an ML monitoring platform with drift detection (KS-Test, Chi-Square) and an automated champion-challenger retraining pipeline, reducing MAE by 26% and improving R2 by 16%.",
    img: "/mlops_driftguard_system.png",
    iconLists: ["Python", "MongoDB", "MLOps"],
    link: "https://github.com/ISHANSHIRODE01/DriftGuard-ML",
    githubLink: "https://github.com/ISHANSHIRODE01/DriftGuard-ML",
    metrics: [
      { label: "MAE", value: "-26%" },
      { label: "R2", value: "+16%" },
    ],
    caseStudy: {
      overview: {
        summary: "Built an ML monitoring platform with drift detection (KS-Test, Chi-Square) and an automated champion-challenger retraining pipeline, reducing MAE by 26% and improving R2 by 16%.",
        problem: "ML models in production degrade over time as incoming data distributions shift.",
        businessContext: "Automated drift monitoring and retraining help maintain model accuracy without manual intervention.",
        technicalContext: "Implemented KS-Test and Chi-Square drift detection alongside an automated champion-challenger retraining pipeline backed by MongoDB.",
      },
      architecture: {
        visualPipeline: "Data → Drift Detection (KS-Test, Chi-Square) → Champion-Challenger Retraining → Updated Model",
        componentBreakdown: [
          "Monitoring Layer: Statistical drift detection using KS-Test and Chi-Square.",
          "Storage Layer: MongoDB for storing monitoring and pipeline data.",
          "Retraining Pipeline: Automated champion-challenger evaluation and retraining workflow.",
        ],
        dataFlow: [
          "Incoming data is evaluated for drift using KS-Test and Chi-Square.",
          "Detected drift triggers the automated champion-challenger retraining pipeline.",
          "Challenger models are evaluated against the current champion before promotion.",
        ],
        infrastructure: {
          models: "Champion-Challenger ML models",
          databases: "MongoDB",
          caching: "None",
          apis: "Python MLOps pipeline",
        },
      },
      challenges: [
        "Detecting distribution shifts reliably across numerical and categorical features.",
        "Automating retraining while ensuring challenger models outperform the existing champion.",
      ],
      technicalDecisions: [
        {
          decision: "KS-Test & Chi-Square Drift Detection",
          rationale: "Provides statistical drift checks for both continuous and categorical features.",
        },
        {
          decision: "Champion-Challenger Retraining",
          rationale: "Compares newly trained challenger models against the current champion before promotion.",
        },
      ],
      implementation: {
        backend: "Python, MongoDB",
        frontend: "N/A",
        infrastructure: "Automated MLOps retraining pipeline",
        aiPipeline: "KS-Test, Chi-Square drift detection, and champion-challenger retraining",
      },
      results: [
        {
          metric: "MAE",
          value: "-26%",
          context: "Reduction in Mean Absolute Error after automated retraining.",
        },
        {
          metric: "R2",
          value: "+16%",
          context: "Improvement in R2 score from the champion-challenger pipeline.",
        },
      ],
      lessonsLearned: [
        "Combining statistical drift detection with champion-challenger evaluation helps prevent model regressions.",
      ],
      futureImprovements: [],
      recruiterTakeaways: {
        aiEngineer: "Shows end-to-end ML monitoring and automated retraining workflows.",
        mlEngineer: "Applies KS-Test, Chi-Square drift detection, and champion-challenger evaluation (MAE -26%, R2 +16%).",
        startupFounder: "Automates model monitoring and retraining to maintain model performance.",
        softwareEngineer: "Integrates Python pipelines with MongoDB for structured MLOps tracking.",
      },
    },
  },
  {
    id: 3,
    title: "AI-Powered Portfolio Platform",
    des: "Full-stack app that analyses GitHub repositories, with a RAG chatbot, JWT authentication and Redis caching; deployed on Vercel and Railway.",
    img: "/council_llm_system.png",
    iconLists: ["Next.js", "FastAPI", "LangChain", "FAISS", "Gemini", "Groq (Llama 3.1)"],
    link: "https://github.com/ISHANSHIRODE01/AI-powered-portfolio-platform",
    githubLink: "https://github.com/ISHANSHIRODE01/AI-powered-portfolio-platform",
    metrics: [],
    caseStudy: {
      overview: {
        summary: "Full-stack app that analyses GitHub repositories, with a RAG chatbot, JWT authentication and Redis caching; deployed on Vercel and Railway.",
        problem: "Developers need an interactive way to present their GitHub repositories and let visitors query project details.",
        businessContext: "A repository analyzer paired with a RAG chatbot makes technical project history easier to explore.",
        technicalContext: "Built with a Next.js frontend and FastAPI backend, using LangChain, FAISS, Gemini, and Groq (Llama 3.1), with JWT authentication and Redis caching.",
      },
      architecture: {
        visualPipeline: "GitHub Repositories → FastAPI + LangChain → FAISS → Gemini & Groq (Llama 3.1) → Next.js RAG Chatbot",
        componentBreakdown: [
          "Frontend: Next.js application deployed on Vercel.",
          "Backend: FastAPI service with JWT authentication and Redis caching, deployed on Railway.",
          "AI & Retrieval Layer: LangChain, FAISS, Gemini, and Groq (Llama 3.1) powering repository analysis and the RAG chatbot.",
        ],
        dataFlow: [
          "GitHub repository data is analysed and indexed into FAISS.",
          "Authenticated users (via JWT) interact with the Next.js frontend.",
          "Queries are routed through FastAPI with Redis caching and answered by the RAG chatbot using LangChain, Gemini, and Groq (Llama 3.1).",
        ],
        infrastructure: {
          models: "Gemini, Groq (Llama 3.1)",
          databases: "FAISS",
          caching: "Redis",
          apis: "FastAPI, GitHub repositories",
        },
      },
      challenges: [
        "Coordinating repository analysis, vector indexing, and RAG chat across separate frontend and backend deployments.",
        "Securing endpoints with JWT authentication and reducing repeated work with Redis caching.",
      ],
      technicalDecisions: [
        {
          decision: "Next.js + FastAPI Split",
          rationale: "Separates the Next.js UI (deployed on Vercel) from the Python AI/RAG backend (deployed on Railway).",
        },
        {
          decision: "JWT Authentication & Redis Caching",
          rationale: "Protects user sessions with JWT and caches responses with Redis.",
        },
      ],
      implementation: {
        backend: "Python, FastAPI, JWT authentication, Redis caching",
        frontend: "Next.js",
        infrastructure: "Deployed on Vercel (frontend) and Railway (backend)",
        aiPipeline: "LangChain, FAISS, Gemini, Groq (Llama 3.1)",
      },
      results: [],
      lessonsLearned: [
        "Adding Redis caching and JWT authentication alongside RAG pipelines keeps full-stack AI apps structured.",
      ],
      futureImprovements: [],
      recruiterTakeaways: {
        aiEngineer: "Demonstrates full-stack RAG chatbot integration using LangChain, FAISS, Gemini, and Groq (Llama 3.1).",
        mlEngineer: "Applies vector retrieval with FAISS inside a deployed application.",
        startupFounder: "End-to-end deployed full-stack product on Vercel and Railway.",
        softwareEngineer: "Combines Next.js, FastAPI, JWT authentication, and Redis caching.",
      },
    },
  },
];

export const projects: Project[] = rawProjects;

export const testimonials: Testimonial[] = [];

export const companies: Company[] = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "ConversAI Labs | AI Engineer Intern (Remote) | Sep 2026 – Oct 2026",
    desc: "• Built and tuned AI voice-agent flows (YAML configuration, prompts, Hindi/English conversation design), including a university admissions assistant and an e-commerce caller agent\n• Reviewed call transcripts to find repeated-question and flow failures, fixed agent behaviour and validated runs with inbound/outbound CSV test batches\n• Contributed PRs to an agent testing platform (FastAPI backend, React frontend), including a fix that fences cancelled improvement workers against stale sessions, covered by 15 pytest tests\n• Designed and tested an MCP server for the platform, verifying its health and authentication endpoints",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 2,
    title: "Blackhole Infiverse | Mumbai (Hybrid) | Oct 2025 – Present",
    desc: "Jr AI Engineer (Jun 2026 – Present) | AI/ML Intern (Oct 2025 – May 2026)\n\n• Worked on a rule-based task evaluation system that routes submissions through pass/fail checks, with human review before release\n• Built event-driven integrations between HR and ERP systems using REST APIs, automating alerts and cross-system workflows\n• Used AI-assisted development to build an append-only, hash-chained event journal for tamper-evident audit trails\n• Tested and hardened an AI-built evaluation platform against a 7-phase validation suite (data integrity, concurrency, deterministic replay)\n• Delivered 15+ tasks across multiple sprints",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 3,
    title: "Elfoxis Digital | SEO Intern | Apr 2025 – Jun 2025",
    desc: "• Built automated reporting dashboards to track keyword performance and website traffic trends\n• Executed data-driven SEO strategies to improve content ranking metrics\n• Generated analytics reports to support content and marketing decisions",
    className: "md:col-span-4",
    thumbnail: "",
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ISHANSHIRODE01",
    name: "GitHub",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ishan-shirode-556534375/",
    name: "LinkedIn",
  },
];
