import React from "react";
import { FooterContainer } from "./FooterStyles";
import SectionDivider from "../../atoms/SectionDivider/SectionDivider";

const Footer = (props) => {
  return (
    <SectionDivider {...props}>
      <FooterContainer></FooterContainer>
    </SectionDivider>
  );
};

export default Footer;
