import React, { useState } from "react";
import Container from "../../templates/Container/Container";
import Description from "../../atoms/Description/Description";
import { useForm } from "react-hook-form";
import { Form, Button, FormContainer, Input, StyledSpan } from "./AuthStyles";
import VisibilityIcon from "../../atoms/VisibilityIcon/VisibilityIcon";
import { RiLock2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  externalSignin,
  signin,
  signup,
  resetPassword,
} from "../../../store/auth";
import { GoogleLogin } from "@react-oauth/google";
import { notify } from "../../../store/utils";
import ClipLoader from "react-spinners/ClipLoader";
import Article from "../../organisms/Article/Article";
import ArticleContent from "../../organisms/ArticleContent/ArticleContent";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const dispatch = useDispatch();

  const status = useSelector((state) => state.user.authData.status);

  const {
    register: registerSignUp,
    handleSubmit: handleRegisterSignUp,
    reset: resetSignUp,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      username: null,
      password: null,
      confirmpassword: null,
      email: null,
    },
  });

  const {
    register: registerSignIn,
    handleSubmit: handleRegisterSignIn,
    reset: resetSignIn,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      password: null,
      email: null,
    },
  });

  const {
    register: registerResetPassword,
    handleSubmit: handleRegisterResetPassword,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      email: null,
    },
  });

  const handleSignIn = (data) => {
    dispatch(signin(data));
    resetSignIn();
  };

  const handleResetPassword = (data) => {
    dispatch(resetPassword(data));
  };

  const handleSignUp = (data) => {
    if (data.password === data.confirmpassword) {
      dispatch(signup(data));
      resetSignUp();
    } else notify("Password fields must have the same value");
  };

  const googleSuccess = async (credentialResponse) => {
    const response = await credentialResponse;

    try {
      dispatch(externalSignin(response));
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    notify("Login failed. Try again.");
  };

  return (
    <Container fillColor>
      <Article
        id={"auth"}
        padding={"2rem 3rem 3rem 3rem"}
        left={
          isPasswordReset ? (
            <FormContainer>
              <RiLock2Line size={"2rem"} />
              <StyledSpan>Reset password</StyledSpan>
              <Description
                smallText
                text={"center"}
                padding={"1rem"}
                width={"240px"}
                marginBottom={"0"}
              >
                If you have lost your password, we'll email you a link to reset
                it. <br /> <br />
                Didn't get an email? Don't forget to check the SPAM folder.
              </Description>
              <Form onSubmit={handleRegisterResetPassword(handleResetPassword)}>
                <Input
                  type="text"
                  placeholder={"Email address *"}
                  {...registerResetPassword("email", {
                    required: true,
                    maxLength: 35,
                  })}
                />
                <Button
                  margin={"0 0 1rem 0"}
                  type="submit"
                  red={1}
                  color={"white"}
                >
                  Reset password
                </Button>
              </Form>
            </FormContainer>
          ) : (
            <>
              <ClipLoader loading={status === "loading"} size={150} />
              {status !== "loading" && (
                <FormContainer>
                  <RiLock2Line size={"2rem"} />
                  <StyledSpan>{isSignUp ? "Sign Up" : "Sign In"}</StyledSpan>
                  <Form
                    onSubmit={
                      isSignUp
                        ? handleRegisterSignUp(handleSignUp)
                        : handleRegisterSignIn(handleSignIn)
                    }
                  >
                    {isSignUp ? (
                      <>
                        <Input
                          type="text"
                          placeholder={"User Name *"}
                          {...registerSignUp("username", {
                            required: true,
                            minLength: 3,
                            maxLength: 15,
                          })}
                        />
                        <Input
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder={"Password *"}
                          {...registerSignUp("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 25,
                          })}
                        />
                        <Input
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder={"Confirm password *"}
                          {...registerSignUp("confirmpassword", {
                            required: true,
                            minLength: 8,
                            maxLength: 25,
                          })}
                        />
                        <VisibilityIcon
                          condition={isPasswordVisible}
                          toggler={() =>
                            setIsPasswordVisible(!isPasswordVisible)
                          }
                        />
                        <Input
                          type="text"
                          placeholder={"Email address *"}
                          {...registerSignUp("email", {
                            required: true,
                            minLength: 5,
                            maxLength: 35,
                          })}
                        />
                      </>
                    ) : (
                      <>
                        <Input
                          type="text"
                          placeholder={"Email address *"}
                          {...registerSignIn("email", {
                            required: true,
                            minLength: 5,
                            maxLength: 35,
                          })}
                        />
                        <Input
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder={"Password *"}
                          {...registerSignIn("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 25,
                          })}
                        />
                        <VisibilityIcon
                          condition={isPasswordVisible}
                          toggler={() =>
                            setIsPasswordVisible(!isPasswordVisible)
                          }
                        />
                      </>
                    )}
                    <Button
                      type="submit"
                      margin={isSignUp ? "0.5rem 0 0 0" : "0.5rem 0 0.5rem 0"}
                      green
                      color={"white"}
                    >
                      {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>
                    {!isSignUp && (
                      <Button
                        margin={"0 0 1rem 0"}
                        type="button"
                        red={1}
                        color={"white"}
                        onClick={() => {
                          setIsPasswordReset(true);
                        }}
                      >
                        Forgot password ?
                      </Button>
                    )}
                    {!isSignUp && (
                      <GoogleLogin
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        width={"240px"}
                      />
                    )}
                    <StyledSpan
                      pointer
                      margin={"1rem 0 0 0"}
                      onClick={() => setIsSignUp(!isSignUp)}
                    >
                      {isSignUp
                        ? "Already have an account? Sign In"
                        : "Don't have an account? Sign Up "}
                    </StyledSpan>
                  </Form>
                </FormContainer>
              )}
            </>
          )
        }
        right={
          <ArticleContent
            titlePrimary={"Hello! and"}
            titleSecondary={"Welcome to..."}
            description={
              "A site that allows you to easily plan your diet. Where you have access to inspiring things created by other people. You can also create food diaries, meals and products and decide if you want to share them with others."
            }
          />
        }
      />
    </Container>
  );
};

export default Auth;
