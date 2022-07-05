import React, { useState } from "react";
import Container from "../../templates/Container/Container";
import { useForm } from "react-hook-form";
import { Form, Button, FormContainer, Input } from "./UserDataEditorStyles";
import VisibilityIcon from "../../atoms/VisibilityIcon/VisibilityIcon";
import { RiLock2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData, deleteUser } from "../../../store/auth";
import { notify } from "../../../store/utils";
import ClipLoader from "react-spinners/ClipLoader";

const UserDataEditor = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();

  const status = useSelector((state) => state.user.authData.status);

  const {
    register: registerEditData,
    handleSubmit: handleRegisterEditData,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      username: user.name,
      oldPassword: null,
      newPassword: null,
      confirmNewPassword: null,
      email: user.email,
    },
  });

  const handleEditData = (data) => {
    if (data.oldPassword && data.newPassword === data.confirmNewPassword) {
      dispatch(updateUserData(data));
    } else if (
      !data.oldPassword &&
      !data.newPassword &&
      !data.confirmNewPassword
    ) {
      dispatch(updateUserData(data));
    } else notify("Something is missing");
  };

  return (
    <Container fillColor>
      <ClipLoader loading={status === "loading"} size={150} />
      {status !== "loading" && (
        <FormContainer>
          <RiLock2Line size={"2rem"} />
          <Form onSubmit={handleRegisterEditData(handleEditData)}>
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
          <Button
            red
            color={"white"}
            onClick={() => deleteUser({ id: user.clientId })}
          >
            Delete Account
          </Button>
        </FormContainer>
      )}
    </Container>
  );
};

export default UserDataEditor;
