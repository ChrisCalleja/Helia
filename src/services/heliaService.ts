import axios from "axios";

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
