import React, { useCallback } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import { CardProps } from '../../@types/Card';
import { MainContent } from './styles';

interface CardComponentProps {
  data: any;
}

const CardComponent: React.FC<CardComponentProps> = ({ data }) => {
  const navigate = useNavigate();

  const handlePostClick = useCallback((id: string) => {
    navigate({pathname: '/post', search: `?post=${id}`});
  }, [navigate]);

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
            src={data.image}
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
                {data.category}
              </CardSubtitle>
            </div>
            <CardText>
              {data.description}
            </CardText>
            <footer>
              <Button onClick={() => handlePostClick(data.id)}>
                Ler mais
              </Button>
              <span>
              {data.date}
              </span>
            </footer>
          </CardBody>
        </Card>
      </div>
    </MainContent>
  );
}

export default CardComponent;