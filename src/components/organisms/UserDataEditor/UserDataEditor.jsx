import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, FormContainer, Input } from "./UserDataEditorStyles";
import VisibilityIcon from "../../atoms/VisibilityIcon/VisibilityIcon";
import { RiLock2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserData,
  deleteUser,
  changeNewsletterStatus,
} from "../../../store/auth";
import { notify } from "../../../store/utils";
import decode from "jwt-decode";

const UserDataEditor = ({ noMarginTop }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));

  const currentUser = useSelector((state) =>
    state.user.authData.currentUser ? state.user.authData.currentUser : ""
  );

  const token = user?.credential;
  const decodedToken = decode(token);

  const dispatch = useDispatch();

  const {
    register: registerEditData,
    handleSubmit: handleRegisterEditData,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      username: currentUser.name,
      oldPassword: null,
      newPassword: null,
      confirmNewPassword: null,
      email: currentUser.email,
    },
  });

  const handleEditData = (data) => {
    if (data.oldPassword && data.newPassword === data.confirmNewPassword) {
      dispatch(updateUserData({ id: user.clientId, userData: data }));
    } else if (
      !data.oldPassword &&
      !data.newPassword &&
      !data.confirmNewPassword
    ) {
      dispatch(updateUserData({ id: user.clientId, userData: data }));
    } else notify("Something is missing");
  };

  const handleNewsletter = (newsletterStatus) =>
    dispatch(
      changeNewsletterStatus({ id: user.clientId, status: newsletterStatus })
    );

  return (
    <FormContainer noMarginTop={noMarginTop}>
      {user?.credential && (
        <>
          {decodedToken.iss !== "https://accounts.google.com" && (
            <Form onSubmit={handleRegisterEditData(handleEditData)}>
              <RiLock2Line size={"2rem"} />
              <Input
                type="text"
                placeholder={"User Name"}
                {...registerEditData("username", {
                  maxLength: 15,
                })}
              />
              <Input
                type={isPasswordVisible ? "text" : "password"}
                placeholder={"Current password"}
                {...registerEditData("oldPassword", {
                  maxLength: 25,
                })}
              />
              <Input
                type={isPasswordVisible ? "text" : "password"}
                placeholder={"New password"}
                {...registerEditData("newPassword", {
                  maxLength: 25,
                })}
              />
              <Input
                type={isPasswordVisible ? "text" : "password"}
                placeholder={"Confirm new password"}
                {...registerEditData("confirmNewPassword", {
                  maxLength: 25,
                })}
              />
              <VisibilityIcon
                condition={isPasswordVisible}
                toggler={() => setIsPasswordVisible(!isPasswordVisible)}
              />
              <Input
                type="text"
                placeholder={"Email"}
                {...registerEditData("email", {
                  maxLength: 25,
                })}
              />
              <Button type="submit" green color={"white"}>
                Save
              </Button>
            </Form>
          )}
          <Button
            warning={currentUser.newsletter ? "" : "true"}
            color={"white"}
            onClick={() => handleNewsletter(!currentUser.newsletter)}
          >
            Newsletter: {currentUser.newsletter ? "Unsubscribe" : "Subscribe"}
          </Button>
          <Button
            warning
            color={"white"}
            onClick={() => dispatch(deleteUser({ id: user.clientId }))}
          >
            Delete Account
          </Button>
        </>
      )}
    </FormContainer>
  );
};

export default UserDataEditor;
