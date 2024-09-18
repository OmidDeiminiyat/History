import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date) {
      const formattedDate = date.split("-").slice(1).join("/"); 
      onSearch(formattedDate); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
