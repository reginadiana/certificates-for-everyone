import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './style.js';
import devs from '../../services/devs';

const Footer = () => (
  <Styled.Container>
    <Styled.Lists>
      <ol>
        <h3>Desenvolvedoras</h3>
        {devs.map((dev, key) => (
          <li key={key}>
            <a href={dev.linkedin}>{dev.name}</a>
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
      <h4>Licença MIT - Copyright - 2022 - Certificates for Everyone</h4>
    </Styled.Licence>
  </Styled.Container>
);

export default Footer;
