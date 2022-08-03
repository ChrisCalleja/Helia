import Event from "./Event";

interface _embedded {
  events: Event[];
}

export default interface MultipleEventResponse {
  _embedded: _embedded;
}
