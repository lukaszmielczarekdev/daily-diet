import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
`;

export const chunks = {
  0: {
    items: 1,
  },
  550: {
    items: 1,
  },
  760: {
    items: 1,
  },
  960: {
    items: 2,
  },
  1022: {
    items: 2,
  },
  1278: {
    items: 2,
  },
  1610: {
    items: 3,
  },
  2550: {
    items: 4,
  },
};
