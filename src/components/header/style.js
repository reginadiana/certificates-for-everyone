import styled from "styled-components";
import * as theme from "../../style/theme";
import background from "../../assets/img/womakerscode-oficina.jpg";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 80vh;
`;

export const ContainerTitle = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: ${theme.colors.pink};
  text-align: center;
  font-weight: bold;
  border-bottom-left-radius: ${theme.gaps.gap8};
  border-top-right-radius: ${theme.gaps.gap8};

  font-size: ${theme.fonts.size24};

  @media (min-width: 720px) {
    font-size: ${theme.fonts.size48};
  }

  @media (min-width: 1140px) {
    font-size: ${theme.fonts.size64};
  }
`;
