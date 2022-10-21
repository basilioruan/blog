import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import { MainContent } from './styles';
import cards from '../../mock/cards.json';
import { useSearchParams } from 'react-router-dom';

const Posts: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState<string>();
  const [posts, setPosts] = useState<any | null >([]);
  
  useEffect(() => {
    const search = searchParams.get('sort');
    if (search) {
      setTitle(search);
    }
    setPosts(cards.data.filter((card: { subtitle: string | null, subject: string | null; }) => card.subtitle === search || card.subject === search));
    if (posts.length === 0) {
      setTitle('Não foram encontrados posts para essa categoria ou assunto');
    }
  }, [posts, searchParams]);

  return (
    <MainContent>
      <h2> { title } </h2>
      <CardList data={posts} />
    </MainContent>
  );
}

export default Posts;