import styled from "styled-components";
import * as theme from "../../style/theme";

export const Container = styled.footer`
  //position: absolute;
  width: 100%;
  bottom: 0;
  background-color: ${theme.colors.black};
  font-size: ${theme.fonts.size14};

  & > div h3,
  h4,
  a {
    color: ${theme.colors.white};
    text-align: left;
  }

  ol li a {
    line-height: 1.5;
  }

  @media (min-width: 720px) {
    font-size: ${theme.fonts.size16};
  }
`;

export const Lists = styled.div`
  display: flex;
  padding: ${theme.gaps.gap24};
  flex-direction: column;

  h3 {
    font-weight: bold;
  }

  @media (min-width: 720px) {
    flex-direction: row;

    ol {
      margin-left: ${theme.gaps.gap24};
    }
  }
`;

export const Licence = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.dark};
  padding: ${theme.gaps.gap16} 0;

  h4 {
    text-align: center;
  }
`;
