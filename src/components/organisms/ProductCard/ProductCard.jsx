import React from "react";
import Card3 from "../../molecules/Card3/Card3";
import { useDispatch, useSelector } from "react-redux";
import RoundChart from "../RoundChart/RoundChart";
import { IoAddCircleOutline } from "react-icons/io5";
import { calculatePercentage } from "../../../utils/calculators";
import { currentItemSet, itemCreateModeSet } from "../../../store/helpers";

const ProductCard = ({
  product,
  product: { _id, title, category, nutrients, createdAt },
}) => {
  const { demandAmount } = useSelector((state) =>
    state.user.authData.currentUser?.profile
      ? state.user.authData.currentUser.profile
      : { bmr: 0, demandAmount: { kcal: 0, protein: 0, carbs: 0, fat: 0 } }
  );

  const dispatch = useDispatch();

  return (
    <Card3
      fillColor
      key={_id}
      onClick={
        createdAt
          ? () => {
              dispatch(currentItemSet({ item: product, type: "product" }));
            }
          : () => {
              dispatch(itemCreateModeSet());
            }
      }
      header={title}
      description={`${createdAt}\n${category}`}
      main={
        createdAt ? (
          <RoundChart
            data={[calculatePercentage(nutrients.kcal, demandAmount.kcal)]}
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
    />
  );
};

export default ProductCard;
