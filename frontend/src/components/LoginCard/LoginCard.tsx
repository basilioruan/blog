import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { MainContent } from './styles';
import { IoEnterOutline } from 'react-icons/io5';

const LoginCard: React.FC = () => {
  return (
    <MainContent>
      <div className="header">
        <h4>Login</h4>
      </div>
      <div className="body">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">
              Usuário
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Digite o nome de usuário"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              Senha
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Digite a senha"
              type="password"
            />
          </FormGroup>
          <button className="login-btn">
            <span className="icon"><IoEnterOutline /></span>
            Entrar
          </button>
        </Form>
      </div>
    </MainContent>
  )
}

export default LoginCard;