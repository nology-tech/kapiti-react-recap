import React from "react";

const SearchBox = props => {
  const { searchTerm, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" defaultValue={searchTerm} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SearchBox;
