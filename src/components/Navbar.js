import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>Math Magicians</h1>
      <ul className={styles.list}>
        <li>
          <Link to="math_magicians_v2">Home</Link>
        </li>
        <li>
          <Link to="quotes/3">Quotes</Link>
        </li>
        <li>
          <Link to="calculator">Calculator</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
