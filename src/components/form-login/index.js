import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import users from '../../services/users.json';
import { Form, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.js';
import * as Styled from './style';
import { UserContext } from '../../contexts/user-autenticate';

const FormLogin = () => {
  const { setEmail } = useContext(UserContext);
  const [userAutenticate, setUserAutenticate] = useState(false);

  const fieldsAreFilled = () => {
    if (values.email && values.password) return true;

    message.warning('Por favor, preencha todos os campos');
  };

  const accountExistent = () => {
    if (users.find(({ email }) => email === values.email)) return true;

    message.warning(
      'Sua conta ainda não existe, crie uma com o nosso formulário ou Google'
    );
  };

  const verifyCredentials = (email, password) => {
    return email === values.email && password === values.password;
  };

  const validatePassword = () => {
    if (users.find(({ email, password }) => verifyCredentials(email, password)))
      return true;

    message.error('E-mail ou senha estão incorretos, tente novamente!', 1);
  };

  const onFinish = () => {
    if (fieldsAreFilled() && accountExistent() && validatePassword()) {
      setUserAutenticate(values.email);
      setEmail(values.email);
      message.loading(
        'Acesso aprovado! Voce será redirecionado para a lista de eventos'
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      email: 'certificadowomakerscode@gmail.com',
      password: 'certificado123',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email inválido').required('Campo obrigatório'),
      password: Yup.string().min(4).required('Campo obrigatório'),
    }),
  });

  const { handleSubmit, values } = formik;

  return (
    <Styled.Container>
      <h1>Digite seus dados e acesse sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <Styled.LoginInput
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <Styled.Error>{formik.errors.email}</Styled.Error>
          )}
        </Form.Item>

        <Form.Item>
          <Styled.LoginInput
            name="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <Styled.Error>{formik.errors.password}</Styled.Error>
          )}
        </Form.Item>

        <Form.Item>
          <Styled.LoginButton onClick={onFinish} htmlType="submit">
            Entrar
          </Styled.LoginButton>
        </Form.Item>
      </Form>
      {userAutenticate && <Redirect to="/list-of-events" />}
    </Styled.Container>
  );
};

export default FormLogin;
