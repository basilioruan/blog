import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import { CardContent, MainContent } from './styles';
import cards from '../../mock/cards.json';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import { IPost } from '../../@types/Post';
import { getAllPosts } from '../../services/PostRequests';
import Loader from '../../components/LoaderComponent/Loader';

const Home: React.FC = () => {
  const [highlights, setHighlights] = useState<any[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const { data } = await getAllPosts();

      setPosts(data.content);
      setLoading(false);
    })();

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

  }, []);

  return (
    <>
      {loading && <Loader />}
      <MainContent>
        <SearchComponent />
        <CardContent>
          <CarouselComponent items={highlights} />
          <CardList data={posts} />
        </CardContent>
      </MainContent>
    </>
  );
}

export default Home;