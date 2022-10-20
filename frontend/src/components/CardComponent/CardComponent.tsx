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
            <div className="card-title">
              <CardTitle tag="h5">
                {data.title}
              </CardTitle>
            </div>
            <div className="card-subtitle">
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {data.subtitle}
              </CardSubtitle>
            </div>
            <CardText>
              {data.description}
            </CardText>
            <footer>
              <Button>
                Ler mais
              </Button>
              <span>
              {data.data}
              </span>
            </footer>
          </CardBody>
        </Card>
      </div>
    </MainContent>
  );
}

export default CardComponent;