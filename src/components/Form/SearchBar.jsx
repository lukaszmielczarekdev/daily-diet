import React, { useState } from "react";

const styles = {
  listStyle: "none",
  padding: "0",
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
                key={Math.random()}
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
