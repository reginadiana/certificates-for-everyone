import React, { useState } from "react";
import { useFormik } from "formik";
import GoogleLogin from "react-google-login";
import * as Yup from "yup";
import users from "../../services/users.json";
import ListEvents from "../../components/list-events/index";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./style.css";
import "../form-register/style-google.css";

const FormLogin = () => {
  const [acessAproved, setAproved] = useState(false);
  const [user, setUser] = useState(users);
  const [organizador, setOrganizador] = useState("");

  const onFinish = () => {
    if (!values.email || !values.password) {
      message.warning("Por favor, preencha todos os campos");
    } else {
      let listEmails = [];

      user.map((itemJson) => {
        listEmails.push(itemJson.email);
      });

      console.log(listEmails);

      if (!listEmails.includes(values.email)) {
        message.warning(
          "Sua conta ainda não existe, crie uma com o nosso formulário ou Google"
        );
      } else {
        user.map((itemJson) => {
          let emailExistent = itemJson.email === values.email;
          let passwordExistent = itemJson.password === values.password;

          if (emailExistent && passwordExistent) {
            setOrganizador(itemJson.name);
            setAproved(true);
            message.loading(
              "Acesso aprovado! Voce será redirecionado para a lista de eventos"
            );

            setUser(
              user.map((item) => {
                if (item.email === itemJson.email) {
                  item["token"] = true;

                  return item;
                } else {
                  return item;
                }
              })
            );
          }
        });

        if (acessAproved === false) {
          message.error(
            "E-mail ou senha estão incorretos, tente novamente!",
            1
          );
        }
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "certificadowomakerscode@gmail.com",
      password: "certificado123",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email inválido").required("Campo obrigatório"),
      password: Yup.string().min(4).required("Campo obrigatório"),
    }),
  });

  const addNewUser = (name, email, password, avatar) => {
    setUser([
      ...user,
      {
        name: name,
        email: email,
        password: password,
        token: true,
        avatar: avatar,
      },
    ]);

    setAproved(true);
    setOrganizador(name);
    message.success("Conta criada com sucesso");
  };

  const responseGoogle = (response) => {
    let listEmails = [];

    user.map((itemJson) => {
      listEmails.push(itemJson.email);
    });

    if (!listEmails.includes(response.profileObj.email)) {
      addNewUser(
        response.profileObj.name,
        response.profileObj.email,
        true,
        response.profileObj.imageUrl
      );
    } else {
      message.warning("Este usuário já está cadastrado");
    }
  };

  const { handleSubmit, values } = formik;

  return (
    <div style={{ marginTop: "10%" }}>
      <div
        className="article"
        style={{ display: acessAproved ? "none" : "block" }}
      >
        <h1 className="title-login">Digite seus dados e acesse sua conta</h1>
        <div className="button-google" style={{ marginLeft: "-22%" }}>
          <GoogleLogin
            clientId="78039332386-46h93ebkr1bb708hqv47h410pdd89mj9.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="loginBtn loginBtn-google"
                style={{ marginLeft: "0%" }}
              >
                Cadastrar com o Google{" "}
              </button>
            )}
            buttonText="Cadastrar com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>

        <p className="ou">OU</p>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Item>
            <Input
              name="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "#f00" }}>{formik.errors.email}</div>
            ) : null}
          </Form.Item>

          <Form.Item>
            <Input
              name="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Senha"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "#f00" }}>{formik.errors.password}</div>
            ) : null}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              style={{
                background: "#C6255A",
                borderColor: "#C6255A",
                marginRight: "15%",
                width: "100%",
              }}
              onClick={onFinish}
              htmlType="submit"
              className="login-form-button"
            >
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </div>

      {acessAproved && <ListEvents users={user} organizador={organizador} />}
    </div>
  );
};

export default FormLogin;
