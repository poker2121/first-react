import styles from './navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top py-4 ${styles.navbar}`}>
      <div className="container">
        <Link className={`navbar-brand text-white ${styles.navbarBrand}`} to={'/'}>
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${styles.navItem}`}>
              <Link
                className={`nav-link active text-white ${styles.navLink}`}
                aria-current="page"
                to={'about'}
              >
                About
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className={`nav-link text-white ${styles.navLink}`} to={'portfolio'}>
                Portfolio
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className={`nav-link text-white ${styles.navLink}`} to={'contact'}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
