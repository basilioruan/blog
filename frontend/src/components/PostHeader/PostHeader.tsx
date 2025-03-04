import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContent, Tag } from './styles';
import { convertToPrBrStringDate } from '../../utils/date-utils';

interface IPostHeaderProps {
  title: string;
  date: Date;
  author: string;
  tags: any[];
}

const PostHeader: React.FC<IPostHeaderProps> = ({title, date, author, tags}: IPostHeaderProps) => {
  const navigate = useNavigate();

  const handleTagClick = useCallback((path: string, sort?: string | number) => {
    navigate({ pathname: path, search: `?sort=${sort}`});
  }, [navigate]);

  return (
    <MainContent>
      <header>
        <h1> {title} </h1>
        <p> {convertToPrBrStringDate(date)} por {author} </p>
        <div className="tags">
          {tags.map(tag => (
            <Tag> 
              <span onClick={() => handleTagClick('/posts', tag.id)}> {tag.name} </span>   
            </Tag>
          ))}
        </div>
      </header>
    </MainContent>
  );
}

export default PostHeader;