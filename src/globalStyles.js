import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat',sans-serif;

}
`;

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0, 50px;
  line-height: 1.5;

  @media screen and (max-width: 960px) {
    padding: 0, 30px;
  }
`;
export const MainHeader = styled.h1`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
  font-size: clamp(2.5rem, 5vw, 5rem);
  color: ${({ inverse }) => (inverse ? "rgb(90, 75, 225)" : "#fff")};
  letter-spacing: 0.3rem;
`;
export const SecondaryHeader = styled.h2`
  margin: 1rem;
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  color: ${({ inverse }) => (inverse ? "rgb(90, 75, 225)" : "#fff")};
  width: ${({ width }) => (width ? width : "100%")};
  text-align: center;
  letter-spacing: 0.3rem;
`;
export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
`;
export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "8rem 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "white" : "rgb(90, 75, 225)")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  @media screen and (max-width: 960px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "4rem 0")};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const Button = styled.button`
  border-radius: 1rem;
  background: none;
  white-space: nowrap;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  overflow: hidden;
  /* position: relative; */
`;

export default GlobalStyle;
