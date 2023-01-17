import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Participants from './Participants'
//import { apiURL } from "../util/apiURL";

const API = process.env.REACT_APP_API_URL;

function RaffleDetails() {
  const [raffle, setRaffle] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/raffles/${id}`)
      .then((response) => {
        setRaffle(response.data);
      }).catch ((err) => {
  console.err('catch', err);
      });
  }, [id]);

  const deleteRaffle = () => {
    axios.delete(`${API}/raffles/${id}`).then(()=>{
navigate(`/raffles`);
    }).catch((err) => console.log('catch', err))
  }

  const handleDelete = async () => {
deleteRaffle();
  };

  return (
    <section>
      <article>
        <div>
          {/* <h4>The Raffle</h4> */}
          <div>
            <h1>{raffle.rafflename}</h1>
            </div>
      
          <Link to={`/raffles`}>
            <button>View Raffles</button>
          </Link>
          <Link to={`/raffles/${id}/winner`}> 
          <button>
          Select Winner 
          </button>
          </Link>
          <Link to={`/raffles/${id}/edit`}>
            <button>Edit Raffle</button>
          </Link>
          <button onClick={handleDelete}>Delete Raffle</button>

          <Participants />
        </div>
      </article>
    </section>
  );
}

export default RaffleDetails;