export interface HeroContent {
  title: string;
  subtitle: string[];
}

export interface AboutContent {
  heading: string;
  text: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  text: string[];
  image: string;
}

export interface ServicesContent {
  heading: string;
  services: ServiceItem[];
}