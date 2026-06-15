export interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export interface Project {
  id: number;
  title: string;
  des: string;
  fullDescription?: string;
  detailedTechStack?: string;
  img: string;
  iconLists: string[];
  link: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  githubLink?: string;
  liveLink?: string;
  architectureLink?: string;
  caseStudy?: {
    overview: {
      summary: string;
      problem: string;
      businessContext: string;
      technicalContext: string;
    };
    architecture: {
      visualPipeline: string;
      componentBreakdown: string[];
      dataFlow: string[];
      infrastructure: {
        models: string;
        databases: string;
        caching: string;
        apis: string;
      };
    };
    challenges: string[];
    technicalDecisions: {
      decision: string;
      rationale: string;
    }[];
    implementation: {
      backend: string;
      frontend: string;
      infrastructure: string;
      aiPipeline: string;
    };
    results: {
      metric: string;
      value: string;
      context: string;
    }[];
    lessonsLearned: string[];
    futureImprovements: string[];
    recruiterTakeaways: {
      aiEngineer: string;
      mlEngineer: string;
      startupFounder: string;
      softwareEngineer: string;
    };
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

export interface WorkExperience {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
  link: string;
}

export interface SocialMedia {
  id: number;
  img: string;
  link: string;
  name: string;
}
