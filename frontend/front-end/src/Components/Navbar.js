import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h1>
        <Link to="/raffles">Raffles</Link>
      </h1>
      <h2>
        <Link to="/raffles/register">Create Raffle</Link>
      </h2>
    </nav>
  );
}

