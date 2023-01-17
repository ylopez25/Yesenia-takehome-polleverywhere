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
    
    //OR
    // <div>
    //     <h1>Winner</h1>
    //      {winner info}
    // </div>
  );
}
