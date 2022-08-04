import Event from "../models/Event";
import Card from "./Card";
import "./EventContainer.css";

interface Props {
  events: Event[];
}

const EventContainer = ({ events }: Props) => {
  return (
    <div className="EventContainer">
      <ul>
        {events.map((singularEvent, index) => (
          <Card event={singularEvent} key={`${index}${singularEvent.id}`} />
        ))}
      </ul>
    </div>
  );
};

export default EventContainer;
