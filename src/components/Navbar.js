import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="quotes/1">Quotes</Link>
        </li>
        <li>
          <Link to="calculator">Calculator</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
