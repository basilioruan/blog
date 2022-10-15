import React, { useEffect } from 'react';
import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';
import { MainContent } from './styles';
import cards from '../../mock/cards.json';

const Home: React.FC = () => {
  useEffect(() => {
    console.log(cards.data);
  }, [])
  return (
    <MainContent>
      <Header />
      <CardList data={cards.data} />
    </MainContent>
  );
}

export default Home;