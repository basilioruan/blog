export interface IPairIdName {
  id?: number | string;
  name: string;
}

export interface IPost {
  id?: number | string;
  title: string;
  category: IPairIdName;
  description: string;
  subject: IPairIdName;
  date: Date;
  image?: string;
  highlight: boolean;
  content: string;
  author: string;
}

export interface IPage {
  content: IPost[];
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