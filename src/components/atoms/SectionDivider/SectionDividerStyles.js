import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Divider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 50px;
  }
`;

export const StyledPath = styled.path`
  fill: ${({ fillColor }) =>
    fillColor ? ({ theme }) => theme.colors.backgroundPrimary : "white"};
`;
