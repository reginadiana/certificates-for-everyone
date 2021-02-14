import styled from "styled-components";
import * as theme from "../../style/theme";
import background from "../../assets/img/womakerscode-oficina.jpg";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
`;

export const Title = styled.h2`
  color: ${theme.colors.pink};
  text-align: center;
  font-weight: bold;

  font-size: ${theme.fonts.size24};

  @media (min-width: 720px) {
    font-size: ${theme.fonts.size48};
  }

  @media (min-width: 1140px) {
    font-size: ${theme.fonts.size64};
  }
`;
