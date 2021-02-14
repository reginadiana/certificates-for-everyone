import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./style.js";
import { linkedinProfile } from "../../services/linkedin";

const Footer = () => (
  <Styled.Container>
    <Styled.Lists>
      <ol>
        <h3>Nossas Desenvolvedoras</h3>
        {linkedinProfile.map(({ name, link }) => (
          <li>
            <a href={link}>{name}</a>
          </li>
        ))}
      </ol>
      <ol>
        <h3>Gerador de Certificados</h3>
        <li>
          <Link to="/sign-in">Login</Link>
        </li>
        <li>
          <Link to="/sign-up">Cadastro</Link>
        </li>
      </ol>
    </Styled.Lists>

    <Styled.Licence>
      <h4>Licença MIT - Copyright - 2020 - Certificates for Everyone</h4>
    </Styled.Licence>
  </Styled.Container>
);

export default Footer;
