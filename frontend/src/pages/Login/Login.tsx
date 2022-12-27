import React from 'react';
import LoginCard from '../../components/LoginCard/LoginCard';
import { MainContent } from './styles';

const Login: React.FC = () => {
  return (
    <MainContent>
      <LoginCard />
    </MainContent>
  )
}

export default Login;