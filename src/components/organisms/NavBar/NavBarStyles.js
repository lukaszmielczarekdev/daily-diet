import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1280px;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  justify-self: center;
  margin: auto;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    padding: 1.5rem 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1.5rem 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1.5rem 1rem;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.img`
  margin-left: 1rem;
  width: 40px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-left: 0;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    margin-left: 1rem;
  }
`;

export const NavAuth = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    display: none;
  }
`;

// mobile
export const NavHamburgerMenu = styled.div`
  display: ${({ mobile }) => (mobile ? "none" : "flex")};
  padding-right: 1rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
  }
`;

export const NavLinksHamburger = styled.ul``;

export const NavOverlay = styled.div`
  display: ${({ isOpened }) => (isOpened ? "flex" : "none")};
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  transition: 0.5s ease;
  flex-direction: column;
  z-index: 5;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 35px;
`;

export const HamburgerIcon = styled.div`
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    display: flex;
  }
`;
