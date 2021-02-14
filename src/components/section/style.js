import styled from "styled-components";
import * as theme from "../../style/theme";

export const Container = styled.div`
  background-color: lightgray;
  text-align: center;
  padding: ${theme.gaps.gap16} 0;

  @media (min-width: 1140px) {
    padding: ${theme.gaps.gap32} 0;
  }
`;

export const Section = styled.section`
  padding: 0 ${theme.gaps.gap16};
  margin-bottom: ${theme.gaps.gap16};
`;

export const Span = styled.span`
  font-size: ${theme.fonts.size14};
  font-weight: bold;

  @media (min-width: 720px) {
    font-size: ${theme.fonts.size16};
  }

  @media (min-width: 1140px) {
    font-size: ${theme.fonts.size20};
  }
`;

export const Button = styled.button`
  font-size: ${theme.fonts.size14};
  font-weight: bold;
  background-color: ${theme.colors.pink};
  border-radius: 25px;
  padding: ${theme.gaps.gap8} ${theme.gaps.gap16};
  width: 80%;
  color: ${theme.colors.white};

  @media (min-width: 300px) {
    width: 200px;
  }
`;
