import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Event from "../models/Event";
import { getEventsByParams } from "../services/heliaService";
import EventContainer from "./EventContainer";
import "./Main.css";
import SearchForm from "./SearchForm";

const Main = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchParams] = useSearchParams();
  const city: string | null = searchParams.get("city");
  const state: string | null = searchParams.get("state");
  const date: string | null = searchParams.get("date");

  const inquiry: any = {
    ...(city ? { city } : {}),
    ...(state ? { state } : {}),
    ...(date ? { date } : {}),
  };

  useEffect(() => {
    if (city || state || date) {
      getEventsByParams(inquiry).then((response) => {
        setEvents(response._embedded.events);
      });
    } else {
      getEventsByParams({}).then((response) => {
        setEvents(response._embedded.events);
      });
    }
  }, [city, state, date]);

  return (
    <div className="Main">
      <div className="FormInputs">
        <SearchForm />
      </div>

      <EventContainer events={events} />
    </div>
  );
};

export default Main;
