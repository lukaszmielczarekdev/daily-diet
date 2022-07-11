import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  SearchList,
  StyledListItem,
  StyledInput,
  Wrapper,
  IconContainer,
} from "./SearchBarStyles";
import Button from "../../atoms/Button/Button";
import {
  productAdded,
  mealsRemoved,
  productsRemoved,
} from "../../../store/helpers";
import {
  GiGrainBundle,
  GiFruitBowl,
  GiMeat,
  GiMilkCarton,
} from "react-icons/gi";
import { RiLeafLine } from "react-icons/ri";
import { IoFishOutline } from "react-icons/io5";
import { BsBox, BsDroplet } from "react-icons/bs";

const SearchBar = ({ data, placeholder, margin }) => {
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    if (e.target.value.length >= 3) {
      const searchData = e.target.value;
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchData.toLowerCase());
      });
      if (searchData === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    } else {
      setFilteredData([]);
    }
  };

  const renderIcon = (category) => {
    if (category === "grain") {
      return <GiGrainBundle />;
    }
    if (category === "fish") {
      return <IoFishOutline />;
    }
    if (category === "fruit") {
      return <GiFruitBowl />;
    }
    if (category === "meat") {
      return <GiMeat />;
    }
    if (category === "dairy") {
      return <GiMilkCarton />;
    }
    if (category === "drink") {
      return <BsDroplet />;
    }
    if (category === "vegetable") {
      return <RiLeafLine />;
    } else {
      return <BsBox />;
    }
  };

  return (
    <Wrapper row margin={margin}>
      <Container>
        <StyledInput
          text
          id="ingredient-input"
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
        />
        {filteredData.length !== 0 && (
          <SearchList>
            {filteredData.map((item) => (
              <StyledListItem
                onClick={() => {
                  dispatch(productAdded({ product: item }));
                  setFilteredData([]);
                }}
                key={item._id}
              >
                <IconContainer>{renderIcon(item.category)}</IconContainer>
                {item.title}
              </StyledListItem>
            ))}
          </SearchList>
        )}
      </Container>
      <Button
        remove
        margin={"0 0.5rem 0.5rem 0"}
        onClick={() => {
          dispatch(productsRemoved());
          dispatch(mealsRemoved());
          setFilteredData([]);
        }}
      >
        Cancel
      </Button>
    </Wrapper>
  );
};

export default SearchBar;
