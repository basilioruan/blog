import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
import { CardProps } from '../../@types/Card';
import { MainContent } from './styles';

interface CardComponentProps {
  data: any;
}

const CardComponent: React.FC<CardComponentProps> = ({ data }) => {
  return (
    <MainContent>
      <div className="card">
        <Card
          style={{
            width: '18rem'
          }}
        >
          <img
            alt="Sample"
            src="https://picsum.photos/300/200"
          />
          <CardBody>
            <CardTitle tag="h5">
              {data.title}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {data.subtitle}
            </CardSubtitle>
            <CardText>
            {data.description}
            </CardText>
            <Button>
              Ler mais
            </Button>
          </CardBody>
        </Card>
      </div>
    </MainContent>
  );
}

export default CardComponent;