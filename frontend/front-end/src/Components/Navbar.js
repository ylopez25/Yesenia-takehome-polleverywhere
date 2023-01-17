import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
        <h1>Join if you're feeling Lucky!</h1>
        <h1>
            <Link to='/raffles'>
            Raffles</Link>
        </h1>
        <button>
        <Link to='/raffles/register'>Create Raffle</Link>
        </button>
    </nav>
  );
}

export default Navbar;