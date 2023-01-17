// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";

// const API = process.env.REACT_APP_API_URL;

// function RaffleEditForm() {
//   let { id } = useParams();
//   let navigate = useNavigate();

//   const [raffle, setRaffle] = useState({
//     rafflename: "",
//     secretcode: "",
//   });

//   const updateRaffle = (updatedRaffle) => {
//     axios
//       .put(`${API}/raffles/${id}`, updatedRaffle)
//       .then(
//         () => {
//           navigate(`/raffles/${id}`);
//         },
//         (error) => console.error(error)
//       )
//       .catch((c) => console.warn("catch", c));
//   };

//   const handleTextChange = (event) => {
//     setRaffle({ ...raffle, [event.target.id]: event.target.value });
//   };

// //   const handleCheckboxChange = () => {
// //     setRaffle({ ...raffle, is_winner: !raffle.is_winner });
// //   };

//   //somethings wrong with edit
//   useEffect(() => {
//     axios.get(`${API}/raffles/${id}`).then(
//       (response) => setRaffle(response.data),
//     //   (error) => navigate(`/not-found`)
//     );
//   }, [id, navigate]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateRaffle(raffle, id);
//   };
//   return (
//     <div className="Edit">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           id="name"
//           value={raffle.name}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Raffle name"
//           required
//         />
//         <label htmlFor="secretcode">Secret code:</label>

//         <input
//           id="secretcode"
//           value={raffle.secretcode}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="secret code"
//           required
//         />
//         <br />

//         <input type="submit" />
//       </form>
//       <Link to={`/raffles/${id}`}>
//         <button>Nevermind!</button>
//       </Link>
//     </div>
//   );
// }

// export default RaffleEditForm;

export default function Winner() {
  //create a function that will check if secret code matches
  //if it does, run a function that will use Math.random id
  return (
    <div>
      {/* show winner page if is_winner is false & show winner if true  */}
      <h1>Pick a Winner</h1>
      <label htmlFor="secretcode">Secret Code:</label>
      <input type="text" placeholder="secret code" />
      <button>Pick now</button>
      <p>*Secret Token : The secret token used when creating the raffle must be provided.*</p>
    </div>

    // <div>
    //     <h1>Winner</h1>
    //      {winner info}
    // </div>
  );
}