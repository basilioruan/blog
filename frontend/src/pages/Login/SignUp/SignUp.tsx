import React, { useState } from 'react';
import { FormContent, MainContent } from './styles';
import { Form, FormGroup, Label } from 'reactstrap';
import { SignUpFormInputs } from './SignUp.data';
import { useForm } from 'react-hook-form';
import { FormInput } from '../../../components/FormInput/styles';
import { IoEnterOutline } from 'react-icons/io5';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router';
import { signUp } from '../../../services/BlogUserRequests';

const SignUp: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormInputs>();
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const onSubmit = async (event: SignUpFormInputs) => {
    const email: string = event.email;
    const password: string = event.password;
    const name: string = event.name;

    try {
      const response: AxiosResponse = await signUp(name, email, password);

      if (response.status === 201) {
        navigate("/sign-in");
      }
    }
    catch (error: any) {
      setErrorMessage(error?.response.data);
    }
  }

  return (
    <MainContent>
      <FormContent>
        <div className="header">
          <h4>Criar usuário</h4>
        </div>
        <div className="body">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="name">
                Nome *
              </Label>
              <FormInput id='name' type="text" {...register("name", { required: true })} error={!!errors.name} />
              {errors.name && <span className='text-danger login-social-text'>Campo obrigatório</span>}
            </FormGroup>
            <FormGroup>
              <Label for="email">
                Email *
              </Label>
              <FormInput id='email' type="text" {...register("email", { required: true })} error={!!errors.email} />
              {errors.email && <span className='text-danger login-social-text'>Campo obrigatório</span>}
            </FormGroup>
            <FormGroup>
              <Label for="password">
                Senha *
              </Label>
              <FormInput id='password' type="password" {...register("password", { required: true })} error={!!errors.password} />
              {errors.password && <span className='text-danger login-social-text'>Campo obrigatório</span>}
            </FormGroup>
            <FormGroup>
              <Label for="confirmedPassword">
                Confirmação de senha *
              </Label>
              <FormInput id='confirmedPassword' type="password" {...register("confirmedPassword", { required: true })} error={!!errors.confirmedPassword} />
              {errors.confirmedPassword && <span className='text-danger login-social-text'>Campo obrigatório</span>}
            </FormGroup>
            {errorMessage && <span className='text-danger login-social-text'>{errorMessage}</span>}
            <button className="login-btn" type='submit'>
              <span className="icon"><IoEnterOutline /></span>
              Registrar
            </button>
          </Form>
        </div>
      </FormContent>

    </MainContent>
  );
}

export default SignUp;