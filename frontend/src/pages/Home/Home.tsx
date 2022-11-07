import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import { CardContent, MainContent } from './styles';
import cards from '../../mock/cards.json';
import SearchComponent from '../../components/SearchComponent/SearchComponent';

const Home: React.FC = () => {
  const [highlights, setHighlights] = useState<any[]>([]);

  useEffect(() => {
    const highlightsCards = cards.data.filter(card => card.highlight);

    setHighlights(
      highlightsCards.map(card => {
        return { 
          altText: card.description,
          caption: card.title,
          key: card.id,
          src: card.image
        }
      })
    );
  }, [])

  return (
    <MainContent>
      <SearchComponent />
      <CardContent>
        <CarouselComponent items={highlights} />
        <CardList data={cards.data} />
      </CardContent>
    </MainContent>
  );
}

export default Home;