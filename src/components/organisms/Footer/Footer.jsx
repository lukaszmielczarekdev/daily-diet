import React from "react";
import { FooterContainer, Wrapper } from "./FooterStyles";
import SectionDivider from "../../atoms/SectionDivider/SectionDivider";
import CheckList from "../../molecules/CheckList/CheckList";
import { benefits } from "../../../data/constants";
import TextField from "../../molecules/TextField/TextField";
import Header from "../../atoms/Header/Header";
import Link from "../../atoms/Link/Link";
import { changeNewsletterStatus } from "../../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../../store/utils";

const Footer = (props) => {
  const { currentUser } = useSelector((state) => state.user.authData);
  const dispatch = useDispatch();

  return (
    <SectionDivider {...props}>
      <Wrapper>
        <FooterContainer>
          <TextField
            color={"black"}
            titlePrimary={"The most important is"}
            titleSecondary={"The satisfaction of our users"}
            description={
              !currentUser
                ? "The current satisfaction rate with our application is 100%.\n\nJoin us now!"
                : "The current satisfaction rate with our application is 100%.\n\nThank you for using Daily Diet."
            }
            small
            margin={"1rem 0"}
            width={"300px"}
          />
          <CheckList
            justify={"left"}
            arrow
            padding={"0 2rem"}
            margin={"0 2rem"}
            children={<Header type={"h4"} text={"Why Daily Diet ?"} />}
            color={"rgb(125, 215, 120)"}
            data={benefits}
            element={"name"}
            align={"baseline"}
          />
          <TextField
            color={"black"}
            titlePrimary={"Always be"}
            titleSecondary={"Up to date"}
            description={
              !currentUser
                ? "If you want to receive a free newsletter, sign up now."
                : currentUser?.newsletter
                ? "You are subscribed to the newsletter."
                : "Sign up for a free newsletter."
            }
            small
            margin={"1rem 0"}
            padding={"0 0 1rem 0"}
            children={
              <Link
                color={"green"}
                to={currentUser ? "/" : "/auth"}
                onClick={
                  currentUser
                    ? () =>
                        dispatch(
                          changeNewsletterStatus({
                            id: undefined,
                            status: currentUser?.newsletter ? false : true,
                          })
                        )
                    : () => notify("You must be signed in")
                }
              >
                {!currentUser
                  ? "Sign In"
                  : currentUser?.newsletter
                  ? "Unsubscribe"
                  : "Subscribe"}
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
