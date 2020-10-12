import styled from "styled-components";
import * as theme from "../../style/theme";

export const Container = styled.footer`
  background-color: ${theme.colors.black};
  margin-top: 25%;

  & > div h3,
  h4,
  a {
    color: ${theme.colors.white};
  }

  ol li a {
    line-height: 1.5;
    font-size: 1.2rem;

    @media screen and (max-width: 660px) {
      font-size: 1rem;
    }
  }
`;

export const Lists = styled.div`
  display: flex;
  padding: 20px;

  h3 {
    font-size: 1.3rem;
    font-weight: bold;
  }

  @media screen and (max-width: 660px) {
    flex-direction: column;

    h3 {
      font-size: 1rem;
    }
  }
`;

export const Licence = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.dark};
  padding: 15px 0;
`;
