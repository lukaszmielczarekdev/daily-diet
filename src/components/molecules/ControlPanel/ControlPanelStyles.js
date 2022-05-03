import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: ${({ nowrap }) => (nowrap ? "nowrap" : "wrap")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "center")};

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
    flex-wrap: wrap;
  }
`;
