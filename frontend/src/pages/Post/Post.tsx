import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PostBody from '../../components/PostBody/PostBody';
import PostHeader from '../../components/PostHeader/PostHeader';
import posts from '../../mock/cards.json';
import { HeaderContainer, MainContent, BodyContainer } from './styles';

const Post: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [post, setPost] = useState<any | null >({});

  useEffect(() => {
    const postId = searchParams.get('post');
    if (postId) {
      setPost(posts.data.find(p => p.id === parseInt(postId)));
    }
  }, [searchParams])

  return (
    <MainContent>
      <HeaderContainer>
        <div className="title">
          <PostHeader title={post.title} date={post.date} author={post.author} />
        </div>
      </HeaderContainer>
      <BodyContainer>
        <PostBody image={post.image} content={post.text} />
      </BodyContainer>
    </MainContent>
  )
}

export default Post;