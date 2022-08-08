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
    const searchParams: any = {
      ...(city ? { city } : {}),
      ...(state ? { state } : {}),
      ...(date ? { date } : {}),
    };
    navigate(`/events/search?${new URLSearchParams(searchParams)}`);
  };

  return (
    <form className="SearchForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="city"></label>
      <input
        className="input-styles"
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      />
      <label htmlFor="state"></label>
      <input
        className="input-styles"
        type="text"
        name="state"
        id="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="State"
      />
      <label htmlFor="date"></label>
      <input
        className="input-styles"
        type="text"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      <button className="input-styles btn">Search</button>
    </form>
  );
};

export default SearchForm;
