import React from 'react';
import { CardProps } from '../../@types/Card';
import CardComponent from '../CardComponent/CardComponent';
import { MainContent } from './styles';

interface ICardListProps {
  data: any;
}

const CardList: React.FC<ICardListProps> = ({ data }) => {
  return (
    <MainContent>
      {data.map( (card: any) => <CardComponent key={card.id} data={card} />)}
    </MainContent>
  )
}

export default CardList;