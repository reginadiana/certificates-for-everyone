import React, { useState, useContext } from "react";
import { useFormik, FormikProvider, ErrorMessage } from "formik";
import { message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import GoogleLogin from "react-google-login";
import * as Yup from "yup";
import * as Styled from "./style";
import registered_users from "../../services/users.json";
import { UserContext } from "../../contexts/user-autenticate";
import { useHistory } from "react-router-dom";

const FormRegister = () => {
  const { setUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Digite seu nome"),
      email: Yup.string()
        .email("E-mail inválido")
        .required("Digite seu e-mail"),
      password: Yup.string().min(4).required("Digite uma senha"),
    }),
  });

  const { handleSubmit, values } = formik;
  const history = useHistory();

  const [registeredUsers, setRegisteredUsers] = useState(registered_users);

  const addNewUser = (name, email, password, avatar) => {
    var newId = registeredUsers[registeredUsers.length - 1].id + 1;
    setRegisteredUsers([
      ...registeredUsers,
      {
        id: newId,
        name: name,
        email: email,
        password: password,
        token: true,
        avatar: avatar,
      },
    ]);

    setUser({
      id: newId,
      name: name,
      email: email,
      password: password,
      token: true,
      avatar: avatar,
    });

    message.success("Conta criada com sucesso");
    history.push("/events");
  };

  const verifyAccountExist = (user_email) =>
    registeredUsers.some(({ email }) => email === user_email);

  const submitForm = () => {
    var someFieldEmpty = Object.values(values).some((value) => !value);

    someFieldEmpty
      ? message.warning("Por favor, preencha todos os campos")
      : verifyAccountExist(values.email)
      ? message.warning("Esta conta já existe")
      : addNewUser(values.name, values.email, values.password, " ");
  };

  const responseGoogle = ({ profileObj }) => {
    verifyAccountExist(profileObj.email)
      ? message.warning("Esta conta já existe")
      : addNewUser(
          profileObj.name,
          profileObj.email,
          true,
          profileObj.imageUrl
        );
  };

  return (
    <Styled.Container>
      <Styled.Title>Cadastre uma conta já, é simples e rápido</Styled.Title>
      <div>
        <GoogleLogin
          clientId="78039332386-46h93ebkr1bb708hqv47h410pdd89mj9.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="loginBtn loginBtn-google"
            >
              Cadastrar com o Google{" "}
            </button>
          )}
          buttonText="Cadastrar com o Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>

      <Styled.Span>OU</Styled.Span>

      <FormikProvider value={formik}>
        <Styled.FormRegister onSubmit={handleSubmit}>
          <Styled.FormField
            name="name"
            type="text"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Digite seu nome"
          />
          <ErrorMessage
            render={(msg) => <Styled.MessageError>{msg}</Styled.MessageError>}
            name="name"
          />

          <Styled.FormField
            name="email"
            type="text"
            prefix={<ScheduleOutlined className="site-form-item-icon" />}
            placeholder="Digite seu e-mail"
          />
          <ErrorMessage
            render={(msg) => <Styled.MessageError>{msg}</Styled.MessageError>}
            name="email"
          />

          <Styled.FormField
            name="password"
            type="password"
            placeholder="Digite uma senha"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
          <ErrorMessage
            render={(msg) => <Styled.MessageError>{msg}</Styled.MessageError>}
            name="password"
          />

          <Styled.Button type="submit" onClick={submitForm}>
            Criar conta
          </Styled.Button>
        </Styled.FormRegister>
      </FormikProvider>
    </Styled.Container>
  );
};

export default FormRegister;
