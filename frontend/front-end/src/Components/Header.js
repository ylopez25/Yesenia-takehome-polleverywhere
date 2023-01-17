import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>
          <NavLink to="/raffles">Raffles</NavLink>
        </h1>
        <button>
          <NavLink to="/raffles/new"> New Raffle</NavLink>
        </button>
      </nav>
    </header>
  );
}