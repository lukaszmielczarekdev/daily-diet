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
import { useHistory, useLocation } from "react-router-dom";
import { updateProfile } from "../../../store/userProfile";

const BMRCalculator = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user?.credential]);

  const { bmr } = useSelector((state) => state.user.userProfile);
  const { protein, carbs, fat } = useSelector(
    (state) => state.user.userProfile.demandPercentage
  );

  const {
    register: registerBMR,
    handleSubmit: handleSubmitBMR,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      height: 0,
      weight: 0,
      age: 0,
    },
  });

  const calculateBMR = async ({ height, weight, age, activity }) => {
    const bmr = parseInt(
      (9.99 * weight + 6.25 * height - 4.9 * age + 5) * activity
    );

    const demandPercentage = { protein, carbs, fat };
    const demandAmount = calculateMacrosAmount(bmr, protein, carbs, fat);

    const profile = {
      weight,
      height,
      age,
      activity,
      bmr,
      demandPercentage,
      demandAmount,
    };

    dispatch(updateProfile(profile));
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
      {user?.credential && bmr && (
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
