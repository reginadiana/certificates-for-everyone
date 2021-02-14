import React from "react";
import MenuBar from "../menu-bar/index";
import * as Styled from "./style";

const Header = () => (
  <Styled.Container>
    <MenuBar />
    <Styled.ContainerTitle>
      <Styled.Title>Certificates for Everyone</Styled.Title>
    </Styled.ContainerTitle>
  </Styled.Container>
);

export default Header;
