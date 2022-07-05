import React, { useState } from "react";
import Container from "../../templates/Container/Container";
import { useForm } from "react-hook-form";
import { Form, Button, FormContainer, Input, StyledSpan } from "./AuthStyles";
import VisibilityIcon from "../../atoms/VisibilityIcon/VisibilityIcon";
import { RiLock2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { externalSignin, signin, signup } from "../../../store/auth";
import { GoogleLogin } from "@react-oauth/google";
import { notify } from "../../../store/utils";
import ClipLoader from "react-spinners/ClipLoader";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
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

  const handleSignIn = (data) => {
    dispatch(signin(data));
    resetSignIn();
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
                    maxLength: 15,
                  })}
                />
                <Input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder={"Password *"}
                  {...registerSignUp("password", {
                    required: true,
                    maxLength: 25,
                  })}
                />
                <Input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder={"Confirm Password *"}
                  {...registerSignUp("confirmpassword", {
                    required: true,
                    maxLength: 25,
                  })}
                />
                <VisibilityIcon
                  condition={isPasswordVisible}
                  toggler={() => setIsPasswordVisible(!isPasswordVisible)}
                />
                <Input
                  type="text"
                  placeholder={"Email Address *"}
                  {...registerSignUp("email", {
                    required: true,
                    maxLength: 25,
                  })}
                />
              </>
            ) : (
              <>
                <Input
                  type="text"
                  placeholder={"Email Address *"}
                  {...registerSignIn("email", {
                    required: true,
                    maxLength: 25,
                  })}
                />
                <Input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder={"Password *"}
                  {...registerSignIn("password", {
                    required: true,
                    maxLength: 25,
                  })}
                />
                <VisibilityIcon
                  condition={isPasswordVisible}
                  toggler={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              </>
            )}
            <Button type="submit" green>
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
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
    </Container>
  );
};

export default Auth;
