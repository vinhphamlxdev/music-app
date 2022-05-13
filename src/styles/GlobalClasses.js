import { css } from "styled-components";

export const GlobalClasses = css`
  body {
    background-color: ${(props) => props.theme.layoutBg};
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
