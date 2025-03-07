import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PostBody from '../../components/PostBody/PostBody';
import PostHeader from '../../components/PostHeader/PostHeader';
import RelatedPosts from '../../components/RelatedPosts/RelatedPosts';
import { HeaderContainer, MainContent, BodyContainer, FooterContainer } from './styles';
import { getPostById } from '../../services/PostRequests';
import { IPost } from '../../@types/Post';
import Loader from '../../components/LoaderComponent/Loader';

const Post: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [post, setPost] = useState<IPost>({} as IPost);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const postId = Number(searchParams.get('post'));
    if (postId) {
      (async() => {
        const response = await getPostById(postId);
        setPost(response.data);
        setLoading(false);
      })();
    }
  }, [searchParams]);

  if (loading || !post.id) {
    return <Loader />
  }

  return (
    <MainContent>
      <HeaderContainer>
        <div className="title">
          <PostHeader title={post.title} date={new Date(post.date)} author={post.author} tags={[post.category, post.subject]} />
        </div>
      </HeaderContainer>
      <BodyContainer>
        <PostBody image={post.image} content={post.content} />
      </BodyContainer>
      <FooterContainer>
        <RelatedPosts tags={{category: post.category.name, subject: post.subject.name}} />
      </FooterContainer>
    </MainContent>
  )
}

export default Post;