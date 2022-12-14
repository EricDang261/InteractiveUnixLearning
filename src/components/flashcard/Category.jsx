import React, { useContext } from "react";
import { ValueContext } from "../context/ValueContext";
import "./Category.css";

const Category = () => {
  const context = useContext(ValueContext);

  return (
    <div className="dropdown-container">
      <form onSubmit={context.handleSubmit}>
        <label>
          <span>Select flashcard modules: </span>
          <select onChange={context.handleChange}>
            <option value="All">All cards</option>
            <option value="Unix-intro">Unix Introduction</option>
            <option value="File-management">File Management</option>
            <option value="Environment">Environment</option>
            <option value="Directory Management">Directory Management</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Category;
