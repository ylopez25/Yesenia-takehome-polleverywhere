export default function Raffle({ raffle }) {
  return (
    <div className="Raffle">
      <a href={`/raffles/${raffle.id}`}>
        <h1>{raffle.rafflename}</h1>
      </a>
      <ul>
        <li>Created on: {raffle.dates}</li>
        <li>Winner ID: {raffle.is_winner ? " 3" : "No Winner yet"}</li>
        <li>Raffled on : {raffle.dates}</li>
      </ul>
    </div>
  );
}
