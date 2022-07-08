import React, { useState } from "react";
import Container from "../../templates/Container/Container";
import Description from "../../atoms/Description/Description";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  FormContainer,
  Input,
  StyledSpan,
} from "./PasswordResetStyles";
import VisibilityIcon from "../../atoms/VisibilityIcon/VisibilityIcon";
import { RiLock2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../store/auth";
import { notify } from "../../../store/utils";
import ClipLoader from "react-spinners/ClipLoader";
import Article from "../../organisms/Article/Article";
import ArticleContent from "../../organisms/ArticleContent/ArticleContent";

const PasswordReset = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const dispatch = useDispatch();

  const status = useSelector((state) => state.user.authData.status);

  const {
    register: registerChangePassword,
    handleSubmit: handleRegisterChangePassword,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      password: null,
      confirmpassword: null,
    },
  });

  const url = window.location;
  const token = url.hash.split("#access_token=")[1];

  const handleResetPassword = (data) => {
    if (data.password === data.confirmpassword) {
      dispatch(changePassword({ token, formData: data }));
    } else notify("Password fields must have the same value");
  };

  return (
    <Container fillColor>
      <Article
        id={"auth"}
        padding={"2rem 3rem 3rem 3rem"}
        left={
          <>
            <ClipLoader loading={status === "loading"} size={150} />
            {status !== "loading" && (
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
                  8 - 25 characters
                </Description>
                <Form
                  onSubmit={handleRegisterChangePassword(handleResetPassword)}
                >
                  <Input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={"New password *"}
                    {...registerChangePassword("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 25,
                    })}
                  />
                  <Input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={"Confirm new password *"}
                    {...registerChangePassword("confirmpassword", {
                      required: true,
                      minLength: 8,
                      maxLength: 25,
                    })}
                  />
                  <VisibilityIcon
                    condition={isPasswordVisible}
                    toggler={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                  <Button margin={"1rem 0"} type="submit" red color={"white"}>
                    Reset password
                  </Button>
                </Form>
              </FormContainer>
            )}
          </>
        }
        right={
          <ArticleContent
            titlePrimary={"To regain access"}
            titleSecondary={"Reset your password"}
            description={"We look forward to your return."}
          />
        }
      />
    </Container>
  );
};

export default PasswordReset;
