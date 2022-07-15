import React, { useState, useMemo, useCallback } from "react";
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
import { debounce } from "../../../utils/helpers";
import { currentCategoryRemoved } from "../../../store/helpers";
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

  const handleEditData = useCallback(
    (data) => {
      if (data.oldPassword && data.newPassword === data.confirmNewPassword) {
        dispatch(updateUserData({ id: user.clientId, userData: data }));
      } else if (
        !data.oldPassword &&
        !data.newPassword &&
        !data.confirmNewPassword
      ) {
        dispatch(updateUserData({ id: user.clientId, userData: data }));

        dispatch(currentCategoryRemoved());
      } else notify("Something is missing");
    },
    [dispatch, user.clientId]
  );

  const debouncedHandleEditData = useMemo(
    () => debounce((data) => handleEditData(data), 400),
    [handleEditData]
  );

  const handleNewsletter = useCallback(
    (newsletterStatus) => {
      dispatch(
        changeNewsletterStatus({ id: user.clientId, status: newsletterStatus })
      );
      dispatch(currentCategoryRemoved());
    },

    [dispatch, user.clientId]
  );

  const debouncedHandleNewsletter = useMemo(
    () => debounce((data) => handleNewsletter(data), 400),
    [handleNewsletter]
  );

  const handleDeleteUser = useCallback(
    () => dispatch(deleteUser({ id: user.clientId })),
    [dispatch, user.clientId]
  );

  const debouncedHandleDeleteUser = useMemo(
    () => debounce((data) => handleDeleteUser(data), 400),
    [handleDeleteUser]
  );

  return (
    <FormContainer noMarginTop={noMarginTop}>
      {user?.credential && (
        <>
          {decodedToken.iss !== "https://accounts.google.com" && (
            <Form onSubmit={handleRegisterEditData(debouncedHandleEditData)}>
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
                  maxLength: 35,
                })}
              />
              <Button type="submit" green color={"white"}>
                Save
              </Button>
            </Form>
          )}
          <Button
            warning={!currentUser.newsletter ? "" : "true"}
            color={"white"}
            onClick={() => debouncedHandleNewsletter(!currentUser.newsletter)}
          >
            Newsletter: {currentUser.newsletter ? "Unsubscribe" : "Subscribe"}
          </Button>
          <Button
            warning
            color={"white"}
            onClick={() => debouncedHandleDeleteUser()}
          >
            Delete Account
          </Button>
        </>
      )}
    </FormContainer>
  );
};

export default UserDataEditor;
