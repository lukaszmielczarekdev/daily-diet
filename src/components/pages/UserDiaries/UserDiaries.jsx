import React, { useState, useEffect } from "react";
import { cloneDeep } from "lodash";
import Diary from "../Diary/Diary";
import Link from "../../atoms/Link/Link";
import Article from "../../organisms/Article/Article";
import TextField from "../../molecules/TextField/TextField";
import Container from "../../templates/Container/Container";
import Carousel from "../../organisms/Carousel/Carousel";
import Image from "../../atoms/Image/Image";
import Attributes from "../../molecules/Attributes/Attributes";
import eggs from "../../../assets/Images/eggs.jpg";
import { diaryAttributes } from "../../../data/constants";
import { useSelector, useDispatch } from "react-redux";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import Card3 from "../../molecules/Card3/Card3";
import RoundChart from "../../organisms/RoundChart/RoundChart";
import CheckList from "../../molecules/CheckList/CheckList";
import { placeholders } from "../../../data/constants";
import { IoAddCircleOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { getDiaries } from "../../../store/userItems";
import DiaryEditor from "../../organisms/DiaryEditor/DiaryEditor";
import { productsRemoved } from "../../../store/userItems";
import {
  calculateProductAmount,
  calculateMacrosForProducts,
  calculateMacrosForMeals,
  calculateMacrosPercentage,
  calculateMacrosAmount,
} from "../../../utils/calculators";
import { v4 as uuidv4 } from "uuid";
import ClipLoader from "react-spinners/ClipLoader";

const UserDiaries = () => {
  const { diaries } = useSelector((state) => state.user.userItems);
  const { bmr, demandAmount, demandPercentage } = useSelector((state) =>
    state.user.authData.currentUser?.profile
      ? state.user.authData.currentUser.profile
      : {
          bmr: 0,
          demandAmount: { kcal: 0, protein: 0, carbs: 0, fat: 0 },
          demandPercentage: { protein: 0, carbs: 0, fat: 0 },
        }
  );
  const status = useSelector((state) => state.user.userItems.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiaries());
  }, [dispatch]);

  const history = useHistory();

  const [currentDiary, setCurrentDiary] = useState(null);
  const [currentDiaryBackup, setCurrentDiaryBackup] = useState(null);
  const [editMode, setEditMode] = useState(null);

  const findDiary = (id) => {
    return diaries.find((diary) => id === diary._id);
  };

  const resetView = () => {
    setCurrentDiary(null);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const renderCards = () => {
    if (diaries.length === 0) return diaries.concat(placeholders);
    if (diaries.length === 1)
      return diaries.concat(placeholders[0], placeholders[1]);
    if (diaries.length === 2) return diaries.concat(placeholders[2]);
    else return diaries;
  };

  const handleCalculateAmount = (mealId, products, productId, amount) => {
    const diary = cloneDeep(currentDiary);
    const meal = diary.meals.find((meal) => meal.id === mealId);
    meal.products = calculateProductAmount(products, productId, amount);
    meal.nutrients = calculateMacrosForProducts(meal.products);
    diary.nutrients = calculateMacrosForMeals(diary.meals);
    diary.demandCoverage = calculateMacrosPercentage(
      diary.demand,
      diary.nutrients,
      diary.demandCoverage
    );

    setCurrentDiary(diary);
  };

  const handleRemoveProduct = (mealId, productId) => {
    const diary = cloneDeep(currentDiary);
    const meal = diary.meals.find((meal) => meal.id === mealId);
    meal.products = meal.products.filter((product) => product.id !== productId);
    if (!meal.products.length) {
      diary.meals = diary.meals.filter((meal) => meal.id !== mealId);
    }

    meal.nutrients = calculateMacrosForProducts(meal.products);
    diary.nutrients = calculateMacrosForMeals(diary.meals);
    diary.demandCoverage = calculateMacrosPercentage(
      diary.demand,
      diary.nutrients,
      diary.demandCoverage
    );

    setCurrentDiary(diary);
  };

  const handleUpdateDiaryDemand = ({ kcal }) => {
    if (!kcal) {
      kcal = 0;
    }

    const diary = cloneDeep(currentDiary);
    const calories = demandAmount.kcal + kcal;
    const demand = calculateMacrosAmount(
      calories,
      demandPercentage.protein,
      demandPercentage.carbs,
      demandPercentage.fat
    );

    diary.demand = demand;
    diary.demandCoverage = calculateMacrosPercentage(
      diary.demand,
      diary.nutrients,
      diary.demandCoverage
    );

    setCurrentDiary(diary);
  };

  const handleAddMeal = (meal) => {
    if (meal.name) {
      const diary = cloneDeep(currentDiary);

      diary.meals.push({
        id: uuidv4(),
        name: meal.name,
        products: meal.products,
        nutrients: calculateMacrosForProducts(meal.products),
      });

      diary.nutrients = calculateMacrosForMeals(diary.meals);
      diary.demandCoverage = calculateMacrosPercentage(
        diary.demand,
        diary.nutrients,
        diary.demandCoverage
      );

      dispatch(productsRemoved());

      setCurrentDiary(diary);
    }
  };

  const handleChangeMealName = (id, name) => {
    const length = name.length;

    if (3 <= length && length <= 25) {
      const diary = cloneDeep(currentDiary);
      const meal = diary.meals.find((meal) => meal.id === id);
      meal.name = name;
      setCurrentDiary(diary);
    }
  };

  const handleChangeDiaryName = (name) => {
    const length = name.length;

    if (3 <= length && length <= 25) {
      const diary = cloneDeep(currentDiary);
      diary.name = name;
      setCurrentDiary(diary);
    }
  };

  const handleResetChanges = () => {
    setCurrentDiary(currentDiaryBackup);
  };

  return (
    <>
      <Container fillColor>
        <Article
          padding={"5rem 3rem 1rem 3rem"}
          left={
            <Image
              alt={"eggs on the table"}
              src={eggs}
              primary={"Low Cost"}
              secondary={"Healthy\nSandwich"}
            />
          }
          right={
            <>
              <TextField
                titlePrimary={"Daily"}
                titleSecondary={"Food Diaries"}
                description={
                  "By creating diaries, you facilitate the implementation of the diet by observing your body and making adjustments depending on what effect you want to achieve.\n\nYou can use the available ready-made products and you can also add your own compositions.\n\nCreated diaries can be shared with others."
                }
              />
              <Link color={"green"} to={!bmr ? "/" : "/builder"}>
                New diary
              </Link>
              <Attributes items={diaryAttributes} />
            </>
          }
        />
        <ControlPanel margin={"1rem 0 0 0"}>
          <ClipLoader loading={status === "loading"} size={150} />
          {status !== "loading" &&
            Array.isArray(diaries) &&
            diaries?.length !== 0 && (
              <Carousel
                infinite
                breakpoints
                items={renderCards().map(
                  ({ _id, name, demandCoverage, meals, createdAt }) => (
                    <Card3
                      fillColor
                      key={_id}
                      onClick={
                        createdAt
                          ? () => {
                              setCurrentDiary(findDiary(_id));
                              setCurrentDiaryBackup(findDiary(_id));
                              setEditMode(null);
                            }
                          : () => {
                              setEditMode(null);
                              history.push(bmr ? "/builder" : "/");
                            }
                      }
                      header={name}
                      description={createdAt}
                      main={
                        createdAt ? (
                          <RoundChart
                            data={[demandCoverage.kcal.completed]}
                            label={"KCAL"}
                            size={"260px"}
                            nameSize={"12px"}
                            valueSize={"25px"}
                            offset={-10}
                          />
                        ) : (
                          <IoAddCircleOutline
                            size={"150px"}
                            color={"rgb(125, 215, 120)"}
                          />
                        )
                      }
                      footer={
                        <CheckList
                          smallText
                          color={"rgb(125, 215, 120)"}
                          data={meals}
                          element={"name"}
                        />
                      }
                    />
                  )
                )}
              />
            )}
        </ControlPanel>
      </Container>
      {currentDiary &&
        (editMode ? (
          <DiaryEditor
            toggleEditMode={toggleEditMode}
            currentDiary={currentDiary}
            calculateAmount={handleCalculateAmount}
            removeProduct={handleRemoveProduct}
            updateDiaryDemand={handleUpdateDiaryDemand}
            addMeal={handleAddMeal}
            changeMealName={handleChangeMealName}
            changeDiaryName={handleChangeDiaryName}
            resetChanges={handleResetChanges}
            resetView={resetView}
          />
        ) : (
          <Diary
            progressData={currentDiary.demandCoverage}
            kcalDemand={currentDiary.demand.kcal}
            key={currentDiary._id}
            title={currentDiary.name}
            items={currentDiary.meals}
            id={currentDiary._id}
            resetView={resetView}
            createdAt={currentDiary.createdAt}
            toggleEditMode={toggleEditMode}
            currentDiary={currentDiary}
          />
        ))}
    </>
  );
};

export default UserDiaries;
