import Event from "../models/Event";
import "./Card.css";

interface Props {
  event: Event;
}

const Card = ({ event }: Props) => {
  return (
    <div className="Card">
      <h2>{event.name}</h2>
      <p>{event.dates.start.localDate}</p>
      <p>{event.dates.start.localTime}</p>
      <p>{event._embedded.venues[0].city.name}</p>
    </div>
  );
};

export default Card;
