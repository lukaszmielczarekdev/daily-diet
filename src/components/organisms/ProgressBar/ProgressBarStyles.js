import styled from "styled-components";

export const BarWrapper = styled.li`
  display: flex;
  align-items: center;
  align-content: center;
  margin-right: 0.5rem;
`;

export const BarContainer = styled.div`
  height: fit-content;
  width: 3rem;
  border-radius: 0 0 10px 0;
  background-color: lightgray;
  margin: 0.5rem 0.5rem 0.5rem 0.4rem;
  line-height: 1rem !important;
  display: flex;
  align-self: center;
`;

export const Filler = styled.div`
  transition: width 1s ease-in-out;
  height: fit-content;
  width: ${({ completed }) => (completed ? `${completed}%` : "0%")};
  max-width: 100%;
  background-color: ${({ color }) => (color ? `${color}` : "white")};
  border-radius: 0 0 10px 0;
  text-align: right;
  align-items: center;
  font-size: 60%;
  padding: 0.1rem;
`;

export const Label = styled.span`
  color: ${({ color }) => (color ? `${color}` : "white")};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : "200")};
  height: fit-content;
  align-self: center;
`;
