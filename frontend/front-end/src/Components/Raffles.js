import axios from "axios";
import { useState, useEffect } from "react";
import Raffle from "./Raffle";

const API = process.env.REACT_APP_API_URL;

export default function Raffles() {
  const [raffles, setRaffles] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/raffles`)
      .then(
        (response) => {
          setRaffles(response.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);

  console.log(raffles, "rafles here");
  return (
    <section className="Raffles">
      <article>
        <h1>Select Raffle to join:</h1>
        {raffles.map((raffle) => {
          return <Raffle key={raffle.id} raffle={raffle} />;
        })}
      </article>
    </section>
  );
}
