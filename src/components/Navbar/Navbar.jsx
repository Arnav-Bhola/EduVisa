import { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.scss";

import Logo from "../../assets/images/logo.png";
import PhoneNavbar from "./PhoneNavbar";

import { donateLink } from "../../pages/redirects/Donate";

const Navbar = () => {
  const [showPhoneNavbar, setShowPhoneNavbar] = useState(false);

  const navbarToggler = () => {
    setShowPhoneNavbar(!showPhoneNavbar);
  };

  return (
    <>
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
            to='/get-involved'
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
          <a
            href={donateLink}
            className={styles["link"]}
          >
            <div className={styles["link-text-container"]}>donate</div>
          </a>
        </div>

        <div
          className={styles["toggler"]}
          onClick={navbarToggler}
        >
          {showPhoneNavbar ? (
            <FontAwesomeIcon
              icon={faX}
              className={styles["toggler-icon"]}
            />
          ) : (
            <FontAwesomeIcon
              className={styles["toggler-icon"]}
              icon={faBars}
            />
          )}
        </div>
      </nav>
      {showPhoneNavbar && <PhoneNavbar />}
    </>
  );
};

export default Navbar;
