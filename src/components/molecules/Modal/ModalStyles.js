import styled from "styled-components";

export const Overlay = styled.article`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  background-color: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 2rem;
  position: relative;
  width: 20rem;
`;

export const CloseButton = styled.span`
  position: absolute;
  right: 16px;
  top: 8px;
  font-size: 24px;
  cursor: pointer;
`;

export const Text = styled.p`
  text-align: center;
`;
