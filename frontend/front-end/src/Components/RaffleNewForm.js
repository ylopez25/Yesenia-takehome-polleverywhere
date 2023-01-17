import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function RaffleNewForm() {
  let navigate = useNavigate();

  const addRaffle = (newRaffle) => {
    axios
      .post(`${API}/raffles`, newRaffle)
      .then(
        () => {
          navigate(`/raffles`);
        },
        (error) => console.log(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [raffle, setRaffle] = useState({
    rafflename: "",
    secrettoken: "",
    is_winner: false,
  });

  const handleCheckbox = (e) => {
    setRaffle({ ...raffle, is_winner: !raffle.is_winner });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRaffle(raffle);
  };

  const handleTextChange = (event) => {
    setRaffle({ ...raffle, [event.target.id]: event.target.value });
  };

  return (
    <section>
      <h1>New Raffle:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rafflename">Raffle Name:</label>
        <input id="rafflename" value={raffle.rafflename} type="text" onChange={handleTextChange} placeholder="NAME OF" />
        <label htmlFor="healthy">Secret Code:</label>
        <input id="healthy" type="text" value={raffle.secretcode} onChange={handleCheckbox} placeholder="SECRET CODE" />
        <button type="submit"> Submit </button>
      </form>
    </section>
  );
}


//need to add more form properties**