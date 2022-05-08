import { H2, H3, H4, H5 } from "./HeaderStyles";

const Header = ({ type, text }) => {
  const getHeader = (type, text) => {
    if (type === "h2") return <H2>{text}</H2>;
    if (type === "h3") return <H3>{text}</H3>;
    if (type === "h4") return <H4>{text}</H4>;
    if (type === "h5") return <H5>{text}</H5>;
  };

  return getHeader(type, text);
};

export default Header;
