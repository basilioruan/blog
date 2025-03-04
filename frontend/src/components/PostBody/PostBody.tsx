import React from 'react';
import { MainContent, TextContainer } from './styles';

interface IPostBodyProps {
  image?: string;
  content: string;
}

const PostBody: React.FC<IPostBodyProps> = ({image, content}: IPostBodyProps) => {
  return (
    <MainContent>
      <img alt="Imagem do post" src={image} />
      <TextContainer>
        {content}
      </TextContainer>
    </MainContent>
  )
};

export default PostBody;