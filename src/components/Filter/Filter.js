import React from "react";
import PropTypes from "prop-types";

import s from "./Filter.module.scss";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <label className={s.filter}>
        Find contacts by name
        <input
          className={s.filter_input}
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
          placeholder="Enter name"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
