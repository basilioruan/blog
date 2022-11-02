import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import { MainContent } from './styles';
import cards from '../../mock/cards.json';
import { useSearchParams } from 'react-router-dom';

interface IPostsProps {
  tags: {
    category: string;
    subject: string;
  }
}

const Posts: React.FC<IPostsProps> = ({ tags }) => {
  const [posts, setPosts] = useState<any>([]);
  
  useEffect(() => {
    const {category, subject} = tags;
    setPosts(cards.data.filter((card: { category: string | null, subject: string | null; }) => card.category === category || card.subject === subject));
  }, [tags]);

  return (
    <MainContent>
      <div className="title">
        <h2> Posts relacionados </h2>
      </div>
      <div className="cards">
        <CardList data={posts} />
      </div>\
    </MainContent>
  );
}

export default Posts;