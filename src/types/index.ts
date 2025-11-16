// src/types/index.ts

export interface Capability {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface DropdownItem {
  title: string;
  desc: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}