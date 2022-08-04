import Event from "./Event";

interface _embedded {
  events: Event;
}

export default interface SingleEventResponse {
  _embedded: _embedded;
}
