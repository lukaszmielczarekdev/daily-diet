import React, { useState } from "react";
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
    <div>
      <div>
        <input
          id="ingredientInput"
          type="text"
          placeholder={props.placeholder}
          onChange={handleFilter}
        />
        {filteredData.length !== 0 && (
          <ul style={styles}>
            {filteredData.map((value) => (
              <li
                onClick={() => {
                  props.addProduct(value);
                  setFilteredData([]);
                }}
                key={uuidv4()}
                style={styles}
              >
                {value.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
