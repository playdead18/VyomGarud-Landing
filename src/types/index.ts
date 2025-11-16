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