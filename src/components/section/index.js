import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./style";

const Section = () => (
  <Styled.Container>
    <Styled.Section>
      <Styled.Span>
        Suas alunas e participantes precisam de um certificado?
      </Styled.Span>
    </Styled.Section>
    <Styled.Section>
      <Styled.Span>Siga o nosso passo a passo. É rápido. É prático</Styled.Span>
    </Styled.Section>
    <Link to="/sign-in">
      <Styled.Button>EU QUERO</Styled.Button>
    </Link>
  </Styled.Container>
);

export default Section;
