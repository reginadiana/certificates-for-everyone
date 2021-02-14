import React from "react";
import { Link } from "react-router-dom";
import logoWomakers from "../../assets/img/logo_texto_branco.png";
import * as Styled from "./style";

const MenuBar = () => (
  <Styled.Container>
    <Link to="/">
      <Styled.Logo src={logoWomakers} alt="logo" />
    </Link>

    <Styled.List>
      <Link to="/">
        <Styled.Item>Home</Styled.Item>
      </Link>
      <Link to="/sign-up">
        <Styled.Item>Cadastro</Styled.Item>
      </Link>
      <Link to="/sign-in">
        <Styled.Item>Login</Styled.Item>
      </Link>
    </Styled.List>
  </Styled.Container>
);

export default MenuBar;
