import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">NewsSense</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/spot-the-fake">Spot the Fake</Link></li>
        <li><Link to="/different-spin">Different Spin</Link></li>
        <li><Link to="/source-checking">Check Sources</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;