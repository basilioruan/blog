export interface Category {
  id?: number | string;
  name: string;
}

export interface Subject {
  id?: number | string;
  name: string;
}

export interface Post {
  id?: number | string;
  title: string;
  category: Category;
  description: string;
  subject: Subject;
  date: Date;
  image: string;
  highlight: boolean;
}

export interface Page {
  content: Post[];
  page: number;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}