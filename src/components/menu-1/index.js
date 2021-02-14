import React from "react";
import { Link } from "react-router-dom";
import logoWomakers from "../../assets/img/logo_texto_cinza.png";
import * as Styled from "./style";

const MenuComponent = () => (
  <Styled.Container>
    <Link to="/">
      <Styled.Logo src={logoWomakers} alt="logo" />
    </Link>

    <Styled.List>
      <Link to="/sign-up">
        <Styled.Item>Cadastro</Styled.Item>
      </Link>
      <Link to="/sign-in">
        <Styled.Item>Login</Styled.Item>
      </Link>
    </Styled.List>
  </Styled.Container>
);

export default MenuComponent;
