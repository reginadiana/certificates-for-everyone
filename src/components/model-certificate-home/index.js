import React from "react";
import * as Styled from "./style";
import modelCertificate from "../../assets/model_certificate.png";

const ModelCertificateHome = () => (
  <Styled.Container>
    <Styled.Title>Nosso modelo</Styled.Title>
    <Styled.Image src={modelCertificate} alt="Modelo de Certificado" />
  </Styled.Container>
);

export default ModelCertificateHome;
