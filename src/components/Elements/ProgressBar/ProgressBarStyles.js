import styled from "styled-components";

export const BarWrapper = styled.li`
  display: flex;
  align-content: center;
`;

export const BarContainer = styled.div`
  height: fit-content;
  width: 3rem;
  border-radius: 5px;
  background-color: lightgray;
  margin: 0.5rem;
  line-height: 1rem !important;
  display: flex;
  align-self: center;
`;

export const Filler = styled.div`
  transition: width 1s ease-in-out;
  height: fit-content;
  width: ${(props) => (props.completed ? `${props.completed}%` : "0%")};
  max-width: 100%;
  background-color: ${(props) => (props.color ? `${props.color}` : "white")};
  border-radius: 5px;
  text-align: right;
  align-items: center;
  font-size: 60%;
`;

export const Label = styled.span`
  color: ${(props) => (props.color ? `${props.color}` : "white")};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : "200")};
  height: fit-content;
  padding: 0.2rem;
`;
