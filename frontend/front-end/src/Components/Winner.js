// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const API = process.env.REACT_APP_API_URL;

export default function Winner() {
  // const [names,setNames] = useState([]);
  // const [initialLoad, setInitialLoad] = useState(false);
  // let { id } = useParams();

// const startRaffle = ()  => {
//     if(names.length <= 1) {
//       return;
//     }
//     const randomId = Math.floor(Math.random() * names.length);
//     const filteredNames = names.filter((name) => name !== names[randomId]);
//     setNames(filteredNames);
//     setInitialLoad(true);
//   }

//   useEffect(() => {
// axios.get(`${API}/raffles/${id}/participants`).then((res) => {
//   setNames(res.data)
//     if(initialLoad) {
//     const filteringTimer = setTimeout(() => {
//       startRaffle()
//     }, 1000);
//     return () => clearTimeout(filteringTimer);
//   }
// }).catch((e) => console.warn("catch", e))

//   },[id,initialLoad])

//loading time
  // if(initialLoad) {
  //   const filteringTimer = setTimeout(() => {
  //     startRaffle()
  //   }, 1000);
  //   return () => clearTimeout(filteringTimer);
  // }
  return (
    <div>
      {/* show winner page if is_winner is false & show winner if true  */}
      <h1>Pick a Winner</h1>
      <label htmlFor="secretcode">Secret Code:</label>
      <input type="text" placeholder="secret code" />
      <p>*Secret Token : The secret token used when creating the raffle must be provided.*</p>
      {/* <button onClick={startRaffle}>Pick Winner</button>
      <p>**last one is the winner</p>
      {names.map((names,index) => (
        <div key={index}>
          <ul>
            <li>{names.firstname}</li>
          </ul>

        </div>

      ))} */}
    </div>
    
    //OR
    // <div>
    //     <h1>Winner</h1>
    //      {winner info}
    // </div>
  );
}
