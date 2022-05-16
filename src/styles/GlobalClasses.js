import { css } from "styled-components";

export const GlobalClasses = css`
  body {
    background-color: ${(props) => props.theme.layoutBg};
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .wrapper {
    position: relative;
    top: 0;
    right: 0;
    width: calc(100% - 240px);
    overflow: hidden overlay;
    margin-left: auto;
    width: 100%;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 90px;
    padding-bottom: 100px;
    ${
      "" /* &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: ${(props) => props.theme.alphaBg};
    } */
    }
  }
  .card-title {
    color: ${(props) => props.theme.textPrimary};
    display: -webkit-box;
    word-break: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-transform: capitalize;
  }
  h3 {
    color: ${(props) => props.theme.textColor};
  }
  .card-content-subtitle {
    font-size: 14px;
    line-height: 1.33;
    color: ${(props) => props.theme.textSecondary};
    text-transform: capitalize;
    flex-wrap: nowrap;
    display: -webkit-box;
    word-break: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: 400;
  }
`;
