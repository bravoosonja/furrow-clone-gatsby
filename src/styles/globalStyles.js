import styled, { css } from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  //mobiles (portrait)
  @media (min-width: 320px) and (max-width: 480px) {
  }

  //tablets (landscape)
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }

  //tablets (portrait)
  @media (min-width: 768px) and (max-width: 1280px) {
  }

  //laptop & desktop
  @media (min-width: 1025px) and (max-width: 1280px) {
  }
  //desktop
  @media (min-width: 1281px) {
  }

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${(props) =>
    props.alignTop &&
    css`
      align-items: top;
    `}

  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme.red};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    border: 4px solid ${(props) => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${(props) => props.theme.red};
  }
  &.nav-open {
    background: ${(props) => props.theme.text};
  }
`;
