import React from "react";
import Card3 from "../../molecules/Card3/Card3";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RoundChart from "../RoundChart/RoundChart";
import CheckList from "../../molecules/CheckList/CheckList";
import { IoAddCircleOutline } from "react-icons/io5";
import { calculatePercentage } from "../../../utils/calculators";
import { currentItemSet } from "../../../store/helpers";

const DiaryCard = ({
  diary,
  diary: { _id, title, nutrients, meals, createdAt, calorieAdjustment },
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { bmr, demandAmount } = useSelector((state) =>
    state.user.authData.currentUser?.profile
      ? state.user.authData.currentUser.profile
      : { bmr: 0, demandAmount: { kcal: 0, protein: 0, carbs: 0, fat: 0 } }
  );

  return (
    <Card3
      fillColor
      key={_id}
      onClick={
        createdAt
          ? () => {
              dispatch(currentItemSet({ item: diary, type: "diary" }));
            }
          : () => {
              history.push(bmr ? "/builder" : "/");
            }
      }
      header={title}
      description={createdAt}
      main={
        createdAt ? (
          <RoundChart
            data={[
              calculatePercentage(
                nutrients.kcal,
                demandAmount.kcal + calorieAdjustment
              ),
            ]}
            label={"KCAL"}
            size={"260px"}
            nameSize={"12px"}
            valueSize={"25px"}
            offset={-10}
          />
        ) : (
          <IoAddCircleOutline size={"150px"} color={"rgb(125, 215, 120)"} />
        )
      }
      footer={
        <CheckList
          smallText
          color={"rgb(125, 215, 120)"}
          data={meals}
          element={"title"}
        />
      }
    />
  );
};

export default DiaryCard;
