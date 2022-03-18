import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import UserDataContext from "../../contexts/UserDataContext";
import { calculateMacroPercentage } from "../../utils/calculators";
import { Form, Label, Input, Button, Select } from "./BmrCalculatorStyles";

const BmrCalculator = (props) => {
  const userData = useContext(UserDataContext);

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

  const calculateBMR = async (data) => {
    const dataCopy = { ...data };
    dataCopy.height = parseInt(data.height);
    dataCopy.weight = parseInt(data.weight);
    dataCopy.age = parseInt(data.age);
    dataCopy.activity = parseInt(data.activity);

    const BMR = parseInt(
      (
        (9.99 * dataCopy.weight +
          6.25 * dataCopy.height -
          4.9 * dataCopy.age +
          5) *
        dataCopy.activity
      ).toFixed(0)
    );

    // set default macroelements percentage
    const defaultMacrosAmount = calculateMacroPercentage(
      BMR,
      userData.userData.demandPercentage.protein,
      userData.userData.demandPercentage.carbs,
      userData.userData.demandPercentage.fat
    );
    dataCopy["demand"] = defaultMacrosAmount;

    userData.setUserInfo({ bmr: BMR, ...dataCopy });
  };

  return (
    <Form onSubmit={handleSubmitBMR(calculateBMR)}>
      <Label>Height(cm):</Label>
      <Input
        type="number"
        {...registerBMR("height", {
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
          required: true,
        })}
      >
        <option value={1.5}>Low</option>
        <option value={2}>Medium</option>
        <option value={2.5}>High</option>
      </Select>
      <Button type="submit">Get Started</Button>
    </Form>
  );
};

export default BmrCalculator;
