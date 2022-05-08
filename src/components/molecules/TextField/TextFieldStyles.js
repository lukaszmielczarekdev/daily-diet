import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "left")};
  align-items: ${({ align }) => (align ? align : "left")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  text-align: ${({ text }) => (text ? text : "left")};
  max-width: ${({ width }) => (width ? width : "100%")};
`;
