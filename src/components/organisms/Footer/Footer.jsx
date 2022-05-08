import React from "react";
import { FooterContainer, Wrapper } from "./FooterStyles";
import SectionDivider from "../../atoms/SectionDivider/SectionDivider";
import CheckList from "../../molecules/CheckList/CheckList";
import { benefits } from "../../../data/constants";
import TextField from "../../molecules/TextField/TextField";
import Header from "../../atoms/Header/Header";
import Link from "../../atoms/Link/Link";
import RoundChart from "../RoundChart/RoundChart";

const Footer = (props) => {
  return (
    <SectionDivider {...props}>
      <Wrapper>
        <FooterContainer>
          <TextField
            titlePrimary={"The most important is"}
            titleSecondary={"The satisfaction of our users"}
            description={
              "The current satisfaction rate with our application is 100%.\n\nThank you for using Daily Diet."
            }
            small
            margin={"1rem 0"}
            width={"300px"}
          />
          <RoundChart
            data={[100]}
            label={"Satisfaction"}
            size={"240px"}
            nameSize={"12px"}
            valueSize={"25px"}
            offset={-10}
          />
          <CheckList
            justify={"left"}
            smallText
            arrow
            padding={"0 2rem"}
            margin={"0 2rem"}
            children={<Header type={"h4"} text={"Why our app ?"} />}
            color={"rgb(125, 215, 120)"}
            data={benefits}
            element={"name"}
            align={"baseline"}
          />
          <TextField
            titlePrimary={"Always be"}
            titleSecondary={"Up to date"}
            description={
              "If you want to receive a free newsletter, sign up now."
            }
            small
            margin={"1rem 0"}
            padding={"0 0 1rem 0"}
            children={
              <Link color={"green"} to={"/"}>
                Subscribe
              </Link>
            }
            width={"300px"}
          />
        </FooterContainer>
      </Wrapper>
    </SectionDivider>
  );
};

export default Footer;
