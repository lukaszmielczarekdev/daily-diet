import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { calculateMacrosAmount } from "../../../utils/calculators";
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
import { useHistory } from "react-router-dom";
import { updateProfile } from "../../../store/auth";

const BMRCalculator = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();

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
  };

  return (
    <FormContainer>
      {!user?.credential && (
        <Container>
          <Label>Get your BMR</Label>
          <Button onClick={() => history.push(`/auth`)}>Sign in</Button>
        </Container>
      )}
      {user?.credential && !bmr && (
        <Form onSubmit={handleSubmitBMR(calculateBMR)}>
          <Label>Height(cm):</Label>
          <Input
            type="number"
            {...registerBMR("height", {
              valueAsNumber: true,
              max: 250,
              min: 1,
              required: true,
              maxLength: 3,
              pattern: /\d+/,
            })}
          />
          <Label>Weight(kg):</Label>
          <Input
            type="number"
            {...registerBMR("weight", {
              valueAsNumber: true,
              max: 500,
              min: 1,
              required: true,
              maxLength: 3,
              pattern: /\d+/,
            })}
          />
          <Label>Age:</Label>
          <Input
            type="number"
            {...registerBMR("age", {
              valueAsNumber: true,
              max: 110,
              min: 1,
              required: true,
              maxLength: 3,
              pattern: /\d+/,
            })}
          />
          <Label>Activity:</Label>
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
          <Button type="submit">Get BMR</Button>
        </Form>
      )}
      {bmr && (
        <Container>
          <Label>Your BMR:</Label>
          <StyledSpan>{bmr}</StyledSpan>
          <Button onClick={() => history.push(`/builder`)}>New diary</Button>
        </Container>
      )}
    </FormContainer>
  );
};

export default BMRCalculator;
