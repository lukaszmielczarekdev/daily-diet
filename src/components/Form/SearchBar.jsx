import React, { useState } from "react";
import {
  Container,
  SearchList,
  StyledListItem,
  StyledInput,
} from "./SearchBarStyles";
import { v4 as uuidv4 } from "uuid";

const styles = {
  listStyle: "none",
  padding: "0",
  cursor: "pointer",
};

const SearchBar = (props) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchData = e.target.value;
    const newFilter = props.data.filter((value) => {
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
        id="ingredientInput"
        type="text"
        placeholder={props.placeholder}
        onChange={handleFilter}
      />
      {filteredData.length !== 0 && (
        <SearchList style={styles}>
          {filteredData.map((value) => (
            <StyledListItem
              onClick={() => {
                props.addProduct(value);
                setFilteredData([]);
              }}
              key={uuidv4()}
              style={styles}
            >
              {value.name}
            </StyledListItem>
          ))}
        </SearchList>
      )}
    </Container>
  );
};

export default SearchBar;
