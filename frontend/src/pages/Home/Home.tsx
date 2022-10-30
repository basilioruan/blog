import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import Carousel from '../../components/Carousel/Carousel';
import { MainContent } from './styles';
import cards from '../../mock/cards.json';

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
      <Carousel items={highlights} />
      <CardList data={cards.data} />
    </MainContent>
  );
}

export default Home;