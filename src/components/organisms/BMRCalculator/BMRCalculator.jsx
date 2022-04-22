import React from "react";
import { useForm } from "react-hook-form";
import { calculateMacrosAmount } from "../../../utils/calculators";
import {
  Form,
  Button,
  Select,
  FormContainer,
  Input,
  Label,
} from "./BMRCalculatorStyles";
import { useSelector, useDispatch } from "react-redux";
import { bmrChanged, demandChanged } from "../../../store/userProfile";
import { useHistory } from "react-router-dom";

const BMRCalculator = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { protein, carbs, fat } = useSelector(
    (state) => state.user.userProfile.demandPercentage
  );

  const {
    register: registerBMR,
    handleSubmit: handleSubmitBMR,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      height: null,
      weight: null,
      age: null,
    },
  });

  const calculateBMR = async ({ height, weight, age, activity }) => {
    const bmr = parseInt(
      (9.99 * weight + 6.25 * height - 4.9 * age + 5) * activity
    );

    dispatch(
      bmrChanged({
        weight,
        height,
        age,
        activity,
        bmr,
      })
    );

    dispatch(
      demandChanged({
        demandPercentage: { protein, carbs, fat },
        demandAmount: calculateMacrosAmount(bmr, protein, carbs, fat),
      })
    );
    history.push(`/builder`);
  };

  return (
    <FormContainer>
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
        <Button type="submit">Get Started</Button>
      </Form>
    </FormContainer>
  );
};

export default BMRCalculator;
