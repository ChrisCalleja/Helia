import axios from "axios";
import Event from "../models/Event";
import SingleEventResponse from "../models/SingleEventResponse";

const key: string = process.env.REACT_APP_API_KEY || "";

export const getEventsByParams = (searchParams: any): Promise<any> => {
  searchParams.apikey = key;
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events.json", {
      params: searchParams,
    })
    .then((response) => {
      return response.data;
    });
};

export const getEventById = (id: string): Promise<Event> => {
  return axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events/${encodeURIComponent(
        id
      )}.json`,
      {
        params: { apikey: key },
      }
    )
    .then((response) => {
      return response.data;
    });
};
