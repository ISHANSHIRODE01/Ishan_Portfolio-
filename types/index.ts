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
  link?: string;
}

export interface SocialMedia {
  id: number;
  img: string;
  link: string;
}