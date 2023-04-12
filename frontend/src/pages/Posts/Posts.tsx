import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import { MainContent, SearchHeader } from './styles';
import cards from '../../mock/cards.json';
import { useSearchParams } from 'react-router-dom';
import SearchComponent from '../../components/SearchComponent/SearchComponent';

const Posts: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState<string>();
  const [posts, setPosts] = useState<any | null >([]);
  const [search, setSearch] = useState<string>();
  
  useEffect(() => {
    const sort = searchParams.get('sort');
    const searchWord = searchParams.get('search');
    if (sort) {
      setTitle(sort);
      setPosts(cards.data.filter((card: { category: string | null, subject: string | null; }) => card.category === sort || card.subject === sort));
    }
    else if (searchWord) {
      setSearch(searchWord);
      setPosts(cards.data.filter((card: { title: string | null }) => card.title?.toLowerCase().includes(searchWord.toLowerCase())));
    }
    else {
      setTitle('Não foram encontrados posts para essa categoria ou assunto');
    }
  }, [search, searchParams]);

  return (
    <MainContent>
      <SearchComponent />
      {search ? (
        <SearchHeader>
          <h3>Resultados para a busca por: 
            <span className="word-search"> { search } </span> 
          </h3>
        </SearchHeader>
      ) : (
        <h2> { title } </h2>
      )}
      <CardList data={posts} />
    </MainContent>
  );
}

export default Posts;