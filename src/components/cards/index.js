import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import "./style.js";
import * as Styled from "./style";

const Cards = () => (
  <Styled.Container>
    <Styled.Title>
      <Styled.Span>Descubrao que o nosso</Styled.Span>
      <Styled.Span>Gerador de Certificados pode fazer por você</Styled.Span>
    </Styled.Title>

    <Styled.Cards>
      <Card className="card" title="Certificados Ilimitados" bordered={false}>
        Envie quantos certificados você precisar.
      </Card>

      <Card className="card" title="Envios Ilimitados" bordered={false}>
        Envie o certificado de cada participante por e-mail.
      </Card>

      <Card className="card" title="Controle de participantes" bordered={false}>
        Cadastre seus participantes para cada evento e selecione quem irá
        receber os certificados em nosso <em>check-list</em>.
      </Card>

      <Card className="card" title="Escreva sua assinatura" bordered={false}>
        Escreva sua assinatura digital em nosso Pad para os seus certificados.
      </Card>

      <Card className="card" title="Uso empresarial" bordered={false}>
        Crie uma conta para você ou sua comunidade e gere certificados para seus
        eventos e cursos.
      </Card>
      <Card className="card" title="Praticidade" bordered={false}>
        Registre seus eventos/cursos e gere os certificados quando for melhor
        para você e envie a hora que quiser.
      </Card>
    </Styled.Cards>
  </Styled.Container>
);

export default Cards;
