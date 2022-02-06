import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./defaultTheme";
import GlobalStyle from "../styles/globalStyle";

const ThemeManager = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default ThemeManager;
