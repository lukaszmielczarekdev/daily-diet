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
import { productAdded } from "../../../store/userItems";
import {
  GiGrainBundle,
  GiFruitBowl,
  GiMeat,
  GiCheeseWedge,
  GiPlantWatering,
} from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";
import { BsBox, BsDroplet } from "react-icons/bs";

const SearchBar = ({ data, placeholder, margin }) => {
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    if (e.target.value.length >= 3) {
      const searchData = e.target.value;
      const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchData.toLowerCase());
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
    if (category === "cheese") {
      return <GiCheeseWedge />;
    }
    if (category === "drink") {
      return <BsDroplet />;
    }
    if (category === "vegetable") {
      return <GiPlantWatering />;
    } else {
      return <BsBox />;
    }
  };

  return (
    <Wrapper margin={margin}>
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
                key={item.id}
              >
                <IconContainer>{renderIcon(item.category)}</IconContainer>
                {item.name}
              </StyledListItem>
            ))}
          </SearchList>
        )}
      </Container>
    </Wrapper>
  );
};

export default SearchBar;
