import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/events/search?${new URLSearchParams({ q: city })}`);
    navigate(`/events/search?${new URLSearchParams({ q: state })}`);
    navigate(`/events/search?${new URLSearchParams({ q: date })}`);
  };

  return (
    <form className="SearchForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="city">City</label>
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        name="state"
        id="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor="date">Date</label>
      <input
        type="text"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
