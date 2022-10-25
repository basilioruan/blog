import React from 'react';
import { MainContent } from './styles';

interface IPostHeaderProps {
  title: string;
  date: string;
  author: string;
}

const PostHeader: React.FC<IPostHeaderProps> = ({title, date, author}: IPostHeaderProps) => {
  return (
    <MainContent>
      <header>
        <h1> {title} </h1>
        <p> {date} por {author} </p>
      </header>
    </MainContent>
  );
}

export default PostHeader;