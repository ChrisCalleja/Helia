interface Start {
  localDate: string;
  localTime: string;
}

interface Date {
  start: Start;
}

//User can type in state name or state code. We can use toLowerCase function to match the values
interface State {
  name: string;
  stateCode: string;
}

interface City {
  name: string;
}

interface Venue {
  city: City;
  state: State;
}

interface _embedded {
  venues: Venue[];
}

interface Image {
  url: string;
}

export default interface Event {
  name: string;
  id: string;
  _embedded: _embedded;
  dates: Date;
  images: Image[];
}
