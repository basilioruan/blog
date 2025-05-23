import React, { ChangeEvent, ChangeEventHandler, ReactNode, useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { MainContent } from './styles';
import { IoEnterOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { FormInput } from '../FormInput/styles';
import { AxiosError, AxiosResponse } from 'axios';
import { signIn } from '../../services/AuthRequests';
import { useNavigate } from 'react-router';
import SessionEnum from '../../services/api/SessionEnum';
import { encryptWithPublicKey } from '../../utils/criptUtils';
import { FieldsLabels } from '../../utils/fieldsLabel';
import { validate } from 'email-validator';

type FormInputs = {
  email: string,
  password: string
}

const LoginCard: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [errorMessage, setErrorMessage] = useState();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();

  const onSubmit = async (event: FormInputs) => {
    const email: string = event.email;
    const password: string = event.password;

    if (!validate(email)) {
      setIsEmailValid(false);
      return;
    }

    try {
      setIsEmailValid(true);
      const response: AxiosResponse = await signIn(email, password);

      if (response.status === 200) {
        setErrorMessage(undefined);
        window.sessionStorage.setItem(SessionEnum.AUTH, `${encryptWithPublicKey(email)};${encryptWithPublicKey(password)}`);
        navigate('/');
      }
    }
    catch (error: any) {
      if (error?.response.status === 401) {
        setErrorMessage(error?.response.data);
      }
    }
  }

  const getFieldErrorMessage = (message: string): ReactNode => {
    return (
      <span className='text-danger login-social-text'> {message} </span>
    );
  }

  return (
    <MainContent>
      <div className="header">
        <h4>Fazer login</h4>
      </div>
      <div className="body">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for="email">
              Email
            </Label>
            <FormInput id='email' type="text" {...register("email", { required: true })} error={!!errors.email} />
            {errors.email && getFieldErrorMessage(FieldsLabels.REQUIRED_FIELD)}
            {!isEmailValid && getFieldErrorMessage(FieldsLabels.EMAIL_INVALID)}
          </FormGroup>
          <FormGroup>
            <Label for="password">
              Senha
            </Label>
            <FormInput id='password' type="password" {...register("password", { required: true })} error={!!errors.password} />
            {errors.password && getFieldErrorMessage(FieldsLabels.REQUIRED_FIELD)}
          </FormGroup>
          {errorMessage && getFieldErrorMessage(errorMessage)}
          <button className="login-btn" type='submit'>
            <span className="icon"><IoEnterOutline /></span>
            Entrar
          </button>
          <button className="sign-up-btn" onClick={() => navigate("/sign-up")}>
            Registre-se
          </button>
          <hr />
          <span className='login-social-text'>Ou você pode logar com:</span>
          <div className='d-flex justify-content-center login-social'>
            <a href=''><FcGoogle /></a>
          </div>
        </Form>
      </div>
    </MainContent>
  )
}

export default LoginCard;
