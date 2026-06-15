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
    title: "Engineering ML pipelines from data ingestion to containerized deployment.",
    description: "AI Systems Engineer",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bento_grid_ml_pipeline.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Available for full-time AI/SWE roles globally",
    description: "Global Engineering Mindset",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Python, FastAPI, Docker, PyTorch, LangChain, FAISS",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Productionizing ML pipelines with Docker, FastAPI, and Airflow.",
    description: "Infrastructure Focus",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Orchestrating multi-agent LLM consensus and FAISS vector retrieval.",
    description: "Current Technical Focus",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Bridging ML research with highly scalable backend engineering.",
    description: "Engineering Philosophy",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

const rawProjects: Project[] = [
  {
    "id": 1,
    "title": "AI-Powered Portfolio Platform",
    "des": "A full-stack RAG and Agentic LLM platform that transforms raw developer data into a recruiter-ready experience.",
    "img": "/council_llm_system.png",
    "iconLists": [
      "Next.js",
      "FastAPI",
      "Gemini",
      "FAISS"
    ],
    "link": "https://github.com/ISHANSHIRODE01/AI-powered-portfolio-platform",
    "githubLink": "https://github.com/ISHANSHIRODE01/AI-powered-portfolio-platform",
    "metrics": [
      {
        "label": "Latency",
        "value": "<1s"
      },
      {
        "label": "Vector DB",
        "value": "FAISS"
      }
    ],
    "caseStudy": {
      "overview": {
        "summary": "An end-to-end full-stack application leveraging Retrieval-Augmented Generation (RAG) and Agentic AI to bridge the gap between code repositories and recruiter-friendly portfolios.",
        "problem": "Developers struggle to communicate their true technical value. Standard portfolios are static, require manual updating, and often lack context for non-technical recruiters.",
        "businessContext": "Recruiters spend less than 10 seconds reviewing a portfolio. Providing an AI chatbot and ATS-optimized bullet points increases interview conversion rates exponentially.",
        "technicalContext": "The system ingests GitHub repo data, vectorizes it, and serves it via an LLM to answer user queries with extremely low latency."
      },
      "architecture": {
        "visualPipeline": "GitHub \u2192 Analyzer \u2192 Gemini \u2192 RAG Engine \u2192 Portfolio \u2192 Recruiter Chatbot",
        "componentBreakdown": [
          "Client Layer: Next.js 15 for the dashboard and RAG chat interface.",
          "Service Orchestrator: FastAPI backend handling JWT auth and GitHub parsing.",
          "Intelligence Layer: FAISS Vector Store and Sentence-Transformers for semantic retrieval.",
          "LLM Engine: Gemini Pro for text enhancement and Llama 3.1 for RAG querying."
        ],
        "dataFlow": [
          "GitHub Parser extracts READMEs and repo metrics.",
          "Sentence-Transformers chunk and vectorize data into FAISS.",
          "User queries the chatbot; backend retrieves top-k vectors.",
          "Llama 3.1 synthesizes context and streams the response via SSE."
        ],
        "infrastructure": {
          "models": "Gemini Pro, Llama 3.1 (via Groq), Sentence-Transformers",
          "databases": "PostgreSQL, FAISS Vector Store, Redis",
          "caching": "Upstash Redis",
          "apis": "GitHub API, Groq Inference API"
        }
      },
      "challenges": [
        "LLM Hallucinations: Initial versions of the chatbot invented features the developer hadn't actually built.",
        "Latency: Vector search and LLM generation were too slow for a real-time web interface.",
        "Data Synchronization: Keeping the vector store updated when underlying GitHub repos changed."
      ],
      "technicalDecisions": [
        {
          "decision": "Using FAISS over Pinecone",
          "rationale": "FAISS offered sub-millisecond local retrieval which was critical for minimizing the total round-trip time of the RAG pipeline without network overhead."
        },
        {
          "decision": "FastAPI over Express.js",
          "rationale": "FastAPI provided native async support and seamless integration with Python-based ML libraries (Sentence-Transformers, LangChain)."
        }
      ],
      "implementation": {
        "backend": "Python, FastAPI, JWT Authentication, SQLAlchemy.",
        "frontend": "Next.js 15 App Router, Tailwind CSS, Framer Motion for UI.",
        "infrastructure": "Dockerized microservices deployed via CI/CD pipelines.",
        "aiPipeline": "LangChain orchestrates the RAG chain; Groq provides ultra-fast Llama 3 inference."
      },
      "results": [
        {
          "metric": "Inference Speed",
          "value": "300 Tok/s",
          "context": "Achieved via Groq API integration."
        },
        {
          "metric": "Retrieval Accuracy",
          "value": "Top-3 Hits",
          "context": "Semantic accuracy for complex GitHub docs."
        }
      ],
      "lessonsLearned": [
        "Streaming responses (Server-Sent Events) are mandatory for AI UX; waiting for a block response severely degrades perceived latency.",
        "Data quality dictates RAG quality; poorly structured READMEs result in poor chat responses."
      ],
      "futureImprovements": [
        "Implement a web scraper to automatically ingest LinkedIn profiles and Medium articles.",
        "Migrate to a hybrid search (Dense + Sparse) to capture exact technical keyword matches."
      ],
      "recruiterTakeaways": {
        "aiEngineer": "Demonstrates full-stack RAG deployment, LLM orchestration, and vector DB management.",
        "mlEngineer": "Shows practical understanding of embedding models and retrieval architectures.",
        "startupFounder": "Built a complete, monetizable SaaS product from scratch with auth and a database.",
        "softwareEngineer": "Clean microservice separation between a Next.js client and FastAPI Python backend."
      }
    }
  },
  {
    "id": 2,
    "title": "AI Knowledge Assistant (RAG Engine)",
    "des": "A production-grade Retrieval-Augmented Generation engine executing hybrid search across academic corpuses.",
    "img": "/rag_architecture_system.png",
    "iconLists": [
      "FastAPI",
      "FAISS",
      "LangChain",
      "Docker"
    ],
    "link": "https://github.com/ISHANSHIRODE01/AI-Knowledge-Assistant-RAG-System-",
    "githubLink": "https://github.com/ISHANSHIRODE01/AI-Knowledge-Assistant-RAG-System-",
    "metrics": [
      {
        "label": "Latency",
        "value": "<1s"
      },
      {
        "label": "Vector DB",
        "value": "FAISS"
      }
    ],
    "caseStudy": {
      "overview": {
        "summary": "An advanced, production-ready RAG system built to solve the contextual limitations of base LLMs by dynamically indexing complex research papers.",
        "problem": "Standard LLMs hallucinate when asked about proprietary or dense academic literature not present in their training data.",
        "businessContext": "Enterprise knowledge bases are massive and unstructured. Precise retrieval saves thousands of hours of manual document review.",
        "technicalContext": "Required a sophisticated hybrid search (Dense + Sparse) coupled with a neural cross-encoder reranker to handle massive document ingestion."
      },
      "architecture": {
        "visualPipeline": "PDF \u2192 Chunking \u2192 Embeddings \u2192 FAISS \u2192 BM25 \u2192 Cross Encoder \u2192 Llama 3 \u2192 Streaming Response",
        "componentBreakdown": [
          "Ingestion Pipeline: Document loaders and text splitters for PDFs and arXiv API.",
          "Retrieval Engine: FAISS (dense) and BM25 (sparse) running in parallel.",
          "Re-Ranking Phase: HuggingFace ms-marco-TinyBERT Cross-Encoder.",
          "Generation Engine: FastAPI backend streaming Server-Sent Events from Groq Llama 3."
        ],
        "dataFlow": [
          "Raw documents are ingested, chunked, and embedded.",
          "User query hits both FAISS and BM25 indices.",
          "Candidate chunks are scored and resorted by the Cross-Encoder.",
          "Top-K chunks are injected into the LLM prompt and streamed to the UI."
        ],
        "infrastructure": {
          "models": "Llama 3 (8B), Sentence-Transformers, ms-marco-TinyBERT",
          "databases": "FAISS, Local File System",
          "caching": "In-memory LRU Cache",
          "apis": "arXiv API, Groq API"
        }
      },
      "challenges": [
        "Keyword Loss: Pure vector search (FAISS) consistently failed to retrieve documents when the user queried for exact acronyms or specific part numbers.",
        "Context Window limits: Stuffing too many retrieved chunks into the LLM caused performance degradation and API limits.",
        "PDF Parsing: Extracting clean text from multi-column academic PDFs with math equations."
      ],
      "technicalDecisions": [
        {
          "decision": "Implementing Hybrid Search (BM25 + FAISS)",
          "rationale": "FAISS excels at semantic meaning, while BM25 guarantees that exact technical keywords and acronyms are never missed."
        },
        {
          "decision": "Adding a Cross-Encoder Re-Ranker",
          "rationale": "Retrieving 20 chunks from hybrid search and re-ranking them neutrally proved far more accurate than just taking the top 5 from vector search directly."
        }
      ],
      "implementation": {
        "backend": "FastAPI async endpoints, Python.",
        "frontend": "React UI with real-time markdown rendering and math support.",
        "infrastructure": "Dockerized containerization for the entire stack.",
        "aiPipeline": "Custom LangChain components overriding default retrieval behavior to support BM25."
      },
      "results": [
        {
          "metric": "Hallucinations",
          "value": "0%",
          "context": "In verifiable closed-book queries."
        },
        {
          "metric": "Retrieval Precision",
          "value": "92%",
          "context": "Top-K after Cross-Encoder re-ranking."
        }
      ],
      "lessonsLearned": [
        "Vector databases alone are insufficient for production RAG. Hybrid search is mandatory.",
        "Cross-encoders add ~200ms latency but double retrieval accuracy; it's a necessary tradeoff."
      ],
      "futureImprovements": [
        "Implement GraphRAG using Neo4j to understand entity relationships across documents.",
        "Add multi-modal capabilities to ingest and query images/charts inside PDFs."
      ],
      "recruiterTakeaways": {
        "aiEngineer": "Understands advanced RAG concepts (Hybrid Search, Re-Ranking, Chunking Strategies) beyond basic tutorials.",
        "mlEngineer": "Familiar with deploying and running HuggingFace Cross-Encoders locally.",
        "startupFounder": "Built a highly performant, production-ready enterprise knowledge tool.",
        "softwareEngineer": "Solid architectural boundaries between ingestion, retrieval, and generation."
      }
    }
  },
  {
    "id": 3,
    "title": "DriftGuard-ML",
    "des": "A closed-loop MLOps pipeline featuring automated drift detection, alerting, and Champion-Challenger retraining.",
    "img": "/mlops_driftguard_system.png",
    "iconLists": [
      "Celery",
      "Prometheus",
      "FastAPI"
    ],
    "link": "https://github.com/ISHANSHIRODE01/DriftGuard-ML",
    "githubLink": "https://github.com/ISHANSHIRODE01/DriftGuard-ML",
    "metrics": [
      {
        "label": "Drift Reduced",
        "value": "40%"
      },
      {
        "label": "Reliability",
        "value": "99.9%"
      }
    ],
    "caseStudy": {
      "overview": {
        "summary": "An end-to-end MLOps system providing automated statistical drift detection, real-time monitoring, and a Champion-Challenger retraining pipeline.",
        "problem": "ML models in production degrade silently over time due to concept and data drift, leading to poor predictions and revenue loss.",
        "businessContext": "Manual monitoring and retraining of ML models consumes hundreds of engineering hours per month. Automation ensures models remain highly accurate safely.",
        "technicalContext": "Needed a robust statistical backend (KS-Tests) coupled with an observable dashboard and a safe deployment strategy (atomic model swapping)."
      },
      "architecture": {
        "visualPipeline": "Production Data \u2192 Drift Detector \u2192 KS-Test \u2192 Chi-Square \u2192 Alert Engine \u2192 Retraining Pipeline \u2192 Champion/Challenger \u2192 Production Model",
        "componentBreakdown": [
          "Inference Layer: FastAPI serving predictions with sub-50ms latency.",
          "Logging Layer: MongoDB Atlas capturing all features and predictions.",
          "Monitoring Pipeline: Statistical drift detector executing batch evaluations.",
          "Retraining Pipeline: Champion vs Challenger model versioner."
        ],
        "dataFlow": [
          "Production traffic hits the FastAPI server; predictions are logged to Mongo.",
          "A batch job runs KS-Tests on numerical data and Chi-Square on categorical data.",
          "If drift exceeds thresholds, the Alert Engine triggers the retraining pipeline.",
          "The Challenger model is trained; if MAE improves by >1%, it replaces the Champion."
        ],
        "infrastructure": {
          "models": "Scikit-Learn Random Forests (Versioned .pkl files)",
          "databases": "MongoDB Atlas",
          "caching": "None",
          "apis": "FastAPI REST Endpoints"
        }
      },
      "challenges": [
        "Race Conditions: Updating the production model file (.pkl) while the server was processing concurrent requests caused file locking errors.",
        "False Positives: Initial drift tests triggered retraining too often due to normal variance in small batch sizes.",
        "Safety: Ensuring a newly trained model didn't perform worse than the degraded model."
      ],
      "technicalDecisions": [
        {
          "decision": "Champion-Challenger Strategy",
          "rationale": "Required the new 'Challenger' model to beat the 'Champion' model by a strict margin before atomic promotion to prevent performance thrashing."
        },
        {
          "decision": "MongoDB for Log Storage",
          "rationale": "Document databases are ideal for storing flexible, changing schemas as model feature inputs evolve over time."
        }
      ],
      "implementation": {
        "backend": "FastAPI, Python, Pydantic validation.",
        "frontend": "Streamlit for the real-time observability dashboard.",
        "infrastructure": "Atomic file locks for zero-downtime model updates.",
        "aiPipeline": "Automated Scikit-Learn pipelines handling preprocessing and inference."
      },
      "results": [
        {
          "metric": "System Uptime",
          "value": "99.9%",
          "context": "During automated retraining phases."
        },
        {
          "metric": "Latency",
          "value": "<50ms",
          "context": "For P95 inference requests."
        }
      ],
      "lessonsLearned": [
        "Atomic deployments and file-locking are critical for serving models in high-concurrency environments.",
        "Statistical thresholds for drift (p-values) must be tuned carefully to avoid alert fatigue."
      ],
      "futureImprovements": [
        "Migrate to Apache Airflow or Prefect for robust DAG orchestration.",
        "Implement evidently.ai for out-of-the-box advanced data drift metrics."
      ],
      "recruiterTakeaways": {
        "aiEngineer": "Understands the complete model lifecycle post-deployment.",
        "mlEngineer": "Strong MLOps skills, including monitoring, alerting, and CI/CD for models.",
        "startupFounder": "Builds resilient systems that heal themselves without manual intervention.",
        "softwareEngineer": "Familiar with concurrency, database logging, and API design."
      }
    }
  }
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
    title: "AI/ML Intern — Blackhole Inverse | Oct 2025 – Present",
    desc: "• Engineered autonomous AI systems, task review agents, and automated workflow pipelines.\n• Built modular components including agent registries and plug-in abstraction layers.\n• Delivered 15+ production-level tasks and developed event-driven HR/ERP integrations.",
    className: "md:col-span-2",
    thumbnail: "",
    link: "https://github.com/ISHANSHIRODE01",
  },
  {
    id: 2,
    title: "SEO Intern — Elfoxis Digital | Apr 2025 – Jun 2025",
    desc: "• Architected automated reporting dashboards to track keyword performance and global traffic trends.\n• Executed data-driven SEO strategies that successfully optimized content ranking metrics.\n• Generated actionable analytics to drive executive decision-making and cross-functional alignment.",
    className: "md:col-span-2",
    thumbnail: "",
    link: "https://github.com/ISHANSHIRODE01",
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
