import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { calculateMacrosAmount } from "../../../utils/calculators";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import {
  Form,
  Button,
  Select,
  FormContainer,
  Input,
  Label,
  StyledSpan,
  Container,
} from "./BMRCalculatorStyles";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../store/auth";
import { currentCategoryRemoved } from "../../../store/helpers";

const BMRCalculator = ({ editMode, noMarginTop, alternateView }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();

  const currentUser = useSelector((state) =>
    state.user.authData.currentUser ? state.user.authData.currentUser : ""
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [user?.credential, currentUser]);

  const bmr = useSelector((state) =>
    state.user.authData.currentUser?.profile.bmr
      ? state.user.authData.currentUser.profile.bmr
      : ""
  );

  const { protein, carbs, fat } = useSelector((state) =>
    state.user.authData.currentUser?.profile
      ? state.user.authData.currentUser.profile.demandPercentage
      : { protein: 0, carbs: 0, fat: 0 }
  );

  const {
    register: registerBMR,
    handleSubmit: handleSubmitBMR,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      height: "",
      weight: "",
      age: "",
    },
  });

  const calculateBMR = async ({ height, weight, age, activity }) => {
    const bmr = parseInt(
      (9.99 * weight + 6.25 * height - 4.9 * age + 5) * activity
    );

    const demandPercentage = { protein, carbs, fat };
    const demandAmount = calculateMacrosAmount(bmr, protein, carbs, fat);

    const data = {
      weight,
      height,
      age,
      activity,
      bmr,
      demandPercentage,
      demandAmount,
    };

    dispatch(updateProfile({ id: user.clientId, profile: data }));

    editMode && dispatch(currentCategoryRemoved());
  };

  return (
    <FormContainer noMarginTop={noMarginTop} alternateView={alternateView}>
      {!user?.credential && (
        <Container>
          <LinkItem
            add
            color={"white"}
            padding={"1rem"}
            margin={"4.5rem 0"}
            radius={"10px 0"}
            to={"/auth"}
            children={"Get your BMR"}
            size={"0.8rem"}
          />
        </Container>
      )}
      {((user?.credential && !bmr) || editMode) && (
        <Form onSubmit={handleSubmitBMR(calculateBMR)}>
          <StyledSpan>BMR: {bmr ? bmr : 0} kcal</StyledSpan>
          <Input
            type="number"
            placeholder={"Height(cm)"}
            {...registerBMR("height", {
              valueAsNumber: true,
              max: 250,
              min: 1,
              required: true,
              maxLength: 3,
              pattern: /\d+/,
            })}
          />
          <Input
            type="number"
            placeholder={"Weight(kg)"}
            {...registerBMR("weight", {
              valueAsNumber: true,
              max: 500,
              min: 1,
              required: true,
              maxLength: 3,
              pattern: /\d+/,
            })}
          />
          <Input
            type="number"
            placeholder={"Age"}
            {...registerBMR("age", {
              valueAsNumber: true,
              max: 110,
              min: 1,
              required: true,
              maxLength: 3,
              pattern: /\d+/,
            })}
          />
          <Label color={alternateView ? "black" : "white"}>Activity</Label>
          <Select
            {...registerBMR("activity", {
              valueAsNumber: true,
              required: true,
            })}
          >
            <option value={1.5}>Low</option>
            <option value={2}>Medium</option>
            <option value={2.5}>High</option>
          </Select>
          <Button type="submit">{editMode ? "Update" : "Get BMR"}</Button>
        </Form>
      )}
      {bmr && !editMode && (
        <Container>
          <StyledSpan>BMR: {bmr}</StyledSpan>
          <LinkItem
            add
            color={"white"}
            padding={"0.8rem"}
            margin={"1rem 0"}
            radius={"10px 0"}
            to={"/builder"}
            children={"New diary"}
            size={"0.8rem"}
          />
        </Container>
      )}
    </FormContainer>
  );
};

export default BMRCalculator;
