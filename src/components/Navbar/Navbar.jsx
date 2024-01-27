import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className={styles["container"]}>
      <Link to='/'>
        <img
          src={Logo}
          alt='EduVisa'
          className={styles["logo"]}
        />
      </Link>

      <div className={styles["links"]}>
        <Link
          to='/'
          className={styles["link"]}
        >
          <div className={styles["link-text-container"]}>who we are</div>
        </Link>
        <Link
          to='/'
          className={styles["link"]}
        >
          <div className={styles["link-text-container"]}>what we do</div>
        </Link>
        <Link
          to='/'
          className={styles["link"]}
        >
          <div className={styles["link-text-container"]}>resources</div>
        </Link>
        <Link
          to='/'
          className={styles["link"]}
        >
          <div className={styles["link-text-container"]}>get involved</div>
        </Link>
        <Link
          to='/'
          className={styles["link"]}
        >
          <div className={styles["link-text-container"]}>blog</div>
        </Link>
        <Link
          to='/'
          className={styles["link"]}
        >
          <div className={styles["link-text-container"]}>donate</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
