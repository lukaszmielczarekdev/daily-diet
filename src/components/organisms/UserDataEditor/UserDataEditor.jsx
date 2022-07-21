import React, { useState, useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, FormContainer, Input } from "./UserDataEditorStyles";
import VisibilityIcon from "../../atoms/VisibilityIcon/VisibilityIcon";
import { RiLock2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData, changeNewsletterStatus } from "../../../store/auth";
import { debounce } from "../../../utils/helpers";
import { currentCategoryRemoved, modalOpened } from "../../../store/helpers";
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
                  minLength: 3,
                  maxLength: 30,
                })}
              />
              <Input
                type={isPasswordVisible ? "text" : "password"}
                placeholder={"Current password"}
                {...registerEditData("oldPassword", {
                  minLength: 8,
                  maxLength: 25,
                })}
              />
              <Input
                type={isPasswordVisible ? "text" : "password"}
                placeholder={"New password"}
                {...registerEditData("newPassword", {
                  minLength: 8,
                  maxLength: 25,
                })}
              />
              <Input
                type={isPasswordVisible ? "text" : "password"}
                placeholder={"Confirm new password"}
                {...registerEditData("confirmNewPassword", {
                  minLength: 8,
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
                  minLength: 5,
                  maxLength: 40,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
            onClick={() =>
              dispatch(
                modalOpened({
                  message: "Delete account?",
                  onClickAction: "deleteUser",
                  onClickActionArg: user.clientId,
                })
              )
            }
          >
            Delete Account
          </Button>
        </>
      )}
    </FormContainer>
  );
};

export default UserDataEditor;
