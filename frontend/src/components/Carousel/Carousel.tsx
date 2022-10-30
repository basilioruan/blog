import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { MainContent } from './styles';

interface ICarouselProps {
  items: any[];
}

const Carousel: React.FC<ICarouselProps> = ({ items }: ICarouselProps) => {
  return (
    <MainContent>
      <UncontrolledCarousel
        items={items}
      />
    </MainContent>
  );
}

export default Carousel;