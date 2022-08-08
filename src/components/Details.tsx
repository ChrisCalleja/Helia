import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Event from "../models/Event";
import { getEventById } from "../services/heliaService";
import "./Details.css";

const Details = () => {
  const id: string | undefined = useParams().id;
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    getEventById(id!).then((response) => {
      console.log(response);
      setEvent(response);
    });
  }, []);

  return <div className="Details"></div>;
};

export default Details;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Gif from "../models/Gif";
// import { getGifById } from "../services/giphyService";
// import Card from "./Card";
// import "./Details.css";

// const Details = () => {
//   const id: string | undefined = useParams().id;
//   const [gif, setGif] = useState<Gif | null>(null);

//   useEffect(() => {
//     getGifById(id!).then((response) => {
//       setGif(response.data);
//     });
//   }, []);

//   return (
//     <div className="Details">{gif ? <Card gif={gif} /> : <p>Loading</p>}</div>
//   );
// };

// export default Details;
