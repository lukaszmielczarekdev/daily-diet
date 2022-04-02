import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  SearchList,
  StyledListItem,
  StyledInput,
} from "./SearchBarStyles";
import { productAdded } from "../../store/userItems";

const SearchBar = ({ data, placeholder }) => {
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const searchData = e.target.value;
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchData.toLowerCase());
    });
    if (searchData === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
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
              {item.name}
            </StyledListItem>
          ))}
        </SearchList>
      )}
    </Container>
  );
};

export default SearchBar;
