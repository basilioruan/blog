import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContent, Tag } from './styles';

interface IPostHeaderProps {
  title: string;
  date: string;
  author: string;
  tags: string[];
}

const PostHeader: React.FC<IPostHeaderProps> = ({title, date, author, tags}: IPostHeaderProps) => {
  const navigate = useNavigate();

  const handleTagClick = useCallback((path: string, sort: string) => {
    navigate({ pathname: path, search: `?sort=${sort}`});
  }, [navigate]);

  return (
    <MainContent>
      <header>
        <h1> {title} </h1>
        <p> {date} por {author} </p>
        <div className="tags">
          {tags.map(tag => (
            <Tag> 
              <span onClick={() => handleTagClick('/posts', tag)}> {tag} </span>   
            </Tag>
          ))}
        </div>
      </header>
    </MainContent>
  );
}

export default PostHeader;