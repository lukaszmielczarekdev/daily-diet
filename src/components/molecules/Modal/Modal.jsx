import React, { useEffect } from "react";
import { Overlay, Container, Text } from "./ModalStyles";
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { modalClosed } from "../../../store/helpers";
import { useDispatch } from "react-redux";

const Modal = ({
  message,
  onClickAction,
  onClickActionArg,
  actions: [deleteUser, deleteDiary, deleteMeal, deleteProduct],
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  const selectAction = () => {
    if (!onClickAction) {
      return;
    }
    if (onClickAction === "deleteUser") {
      return dispatch(deleteUser({ id: onClickActionArg }));
    }
    if (onClickAction === "deleteMeal") {
      return dispatch(deleteMeal(onClickActionArg));
    }
    if (onClickAction === "deleteDiary") {
      return dispatch(deleteDiary(onClickActionArg));
    }
    if (onClickAction === "deleteProduct") {
      return dispatch(deleteProduct(onClickActionArg));
    }
  };

  const handleConfirm = () => {
    selectAction();
    dispatch(modalClosed());
  };

  return (
    <Overlay>
      <Container>
        <Text>{message}</Text>
        <ControlPanel padding={"2rem 0 0 0"}>
          <Button
            remove
            children={"No"}
            onClick={() => dispatch(modalClosed())}
          />
          <Button add children={"Yes"} onClick={() => handleConfirm()} />
        </ControlPanel>
      </Container>
    </Overlay>
  );
};

export default Modal;
