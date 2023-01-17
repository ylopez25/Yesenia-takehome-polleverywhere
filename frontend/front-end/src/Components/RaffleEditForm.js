import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function RaffleEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [raffle, setRaffle] = useState({
    rafflename: "",
    secretcode: "",
  });

  const updateRaffle = (updatedRaffle) => {
    axios
      .put(`${API}/raffles/${id}`, updatedRaffle)
      .then(
        () => {
          navigate(`/raffles/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setRaffle({ ...raffle, [event.target.id]: event.target.value });
  };

  //   const handleCheckboxChange = () => {
  //     setRaffle({ ...raffle, is_winner: !raffle.is_winner });
  //   };

  //somethings wrong with edit
  useEffect(() => {
    axios.get(`${API}/raffles/${id}`).then(
      (response) => setRaffle(response.data)
      //   (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRaffle(raffle, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={raffle.name} type="text" onChange={handleTextChange} placeholder="Raffle name" required />
        <label htmlFor="secretcode">Secret code:</label>

        <input id="secretcode" value={raffle.secretcode} type="text" onChange={handleTextChange} placeholder="secret code" required />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/raffles/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

