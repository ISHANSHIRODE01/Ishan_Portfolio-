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
    title: "AI & Machine Learning Engineer specializing in Generative AI, NLP, and LLMs",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I build intelligent systems that understand, reason, and create",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about transforming research into scalable applications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Exploring Multimodal AI & RAG Architectures",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Emotion-Aware Wellbeing AI",
    des: "Multimodal AI for mental wellbeing combining text, voice, and facial analysis with FastAPI & Streamlit.",
    fullDescription: "This is a multi-modal emotion & wellbeing AI system combining text, voice, and facial features. It detects emotions from voice and text and generates empathetic, context-aware responses.",
    detailedTechStack: "Frontend: Streamlit, Plotly, custom CSS/HTML | Backend: FastAPI, Pydantic, Uvicorn | ML/AI: PyTorch, Transformers (HuggingFace – DistilRoBERTa), Wav2Vec2, OpenCV, TensorFlow (FER) | Database: SQLite3 | Languages: Python, CSS/HTML",
    img: "/project-emotion.png",
    iconLists: ["/stream.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/ISHANSHIRODE01/Emotion-Aware-Productivity-Mental-Wellbeing-Assistant",
  },
  {
    id: 2,
    title: "Multi-LLM Council Framework",
    des: "Consensus-generating system orchestrating multiple local & cloud LLMs using React and FastAPI.",
    fullDescription: "This is a multi-LLM council system where multiple large models deliberate and generate consensus answers. It features a framework where multiple LLMs collaborate to produce higher-quality, reasoned outputs for complex queries.",
    detailedTechStack: "Backend: Python, FastAPI, Asyncio | Frontend: React (with Vite), Chart.js | LLM Orchestration: OpenRouter (for cloud LLMs), Ollama (local models) | Storage: JSON store for logs / results | Languages: Python, JavaScript (React), CSS",
    img: "/project-council.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/ISHANSHIRODE01/Enhanced-Multi-LLM-Council-Framework",
  },
  {
    id: 3,
    title: "Multilingual Conversational AI",
    des: "Voice-enabled bot with real-time translation, speech recognition, and grammar feedback.",
    fullDescription: "A multilingual conversational bot with voice + text support and language translation + grammar feedback. It supports real-time translation, speech recognition, and emotion-aware replies.",
    detailedTechStack: "ASR (Speech-to-Text): OpenAI Whisper | Translation: MarianMT (Helsinki-NLP) | LLM Integration: GPT/Gemini API | TTS (Text-to-Speech): pyttsx3 | Grammar Feedback: LanguageTool | Backend: FastAPI | Frontend: Streamlit | Languages: Python",
    img: "/project-multilingual.png",
    iconLists: ["/stream.svg", "/tail.svg"],
    link: "https://github.com/ISHANSHIRODE01/MULTILINGUAL_CHATBOT",
  },
  {
    id: 4,
    title: "Real-Time Pothole Detection",
    des: "Real-time road hazard detection system utilising YOLOv8 object detection and OpenCV.",
    fullDescription: "This project performs real-time pothole and road hazard detection using object detection (YOLOv8). It assists smart city road monitoring and infrastructure planning.",
    detailedTechStack: "Computer Vision / Object Detection: YOLOv8 (Ultralytics) | ML + Deep Learning: Python, PyTorch (YOLOv8 built on PyTorch) | Image Processing: OpenCV | Notebook & Scripts: Jupyter Notebook / Python scripts | Languages: Python",
    img: "/Pothole.png",
    iconLists: ["/tail.svg", "/ts.svg"],
    link: "https://github.com/ISHANSHIRODE01/Pothole-Detection",
  },
  {
    id: 5,
    title: "COVID-19 Data Analysis",
    des: "Exploratory data analysis of COVID-19 infection patterns and trends using Python libraries.",
    fullDescription: "A COVID-19 data exploratory analysis notebook project. It involves performing exploratory data analysis and trend visualization to identify infection patterns and spikes.",
    detailedTechStack: "Data Analysis & Visualization: Python | Libraries: Pandas, NumPy, Matplotlib, Seaborn | Notebook: Jupyter Notebook | Language: Jupyter Notebook (Python)",
    img: "/project-covid.jpg",
    iconLists: ["/tail.svg"],
    link: "https://github.com/ISHANSHIRODE01/covid-19-analysis",
  },
  {
    id: 6,
    title: "Blinkit Business Analytics",
    des: "Data analysis project exploring Blinkit delivery trends, KPIs, and inventory optimization.",
    fullDescription: "A data analysis project exploring Blinkit trends. It includes conducting KPI analysis and demand forecasting to support pricing and inventory optimization.",
    detailedTechStack: "Data Analysis & Visualization: Python | Libraries: Pandas, NumPy, Matplotlib, Seaborn | Notebook: Jupyter Notebook | Dataset: CSV (blinkit_data.csv) | Language: Python (Jupyter Notebook)",
    img: "/project-blinkit.jpg",
    iconLists: ["/tail.svg"],
    link: "https://github.com/ISHANSHIRODE01/blinkit-analysis",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Collaborating with Ishan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ishan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ishan is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

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
    title: "AIML Intern — Blackhole Infiverse",
    desc: "Developed applied NLP and Computer Vision pipelines. Performed EDA and improved ML model performance. Built production-ready ML features.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    link: "https://drive.google.com/file/d/1Y4JDfF92GV_hJ8zyCtWg16mPcP1JKhKc/view?usp=drive_link",
  },
  {
    id: 2,
    title: "SEO & Data Analytics Intern — Elfoxis Digital",
    desc: "Automated analytics reporting workflows. Conducted SEO competitor analysis and keyword research. Improved traffic insights.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    link: "https://drive.google.com/file/d/1UaSninYChTZqjHCrbUanlywVQz7oCJTa/view?usp=sharing",
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ISHANSHIRODE01",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ishan-shirode-556534375/",
  },
];
