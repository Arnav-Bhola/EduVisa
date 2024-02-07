import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/images/logo.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["subcolumn"]}>
          <h2 className={styles["column-header"]}>Join Us</h2>
          <div className={styles["links"]}>
            <Link
              to='/'
              className={styles["link"]}
            >
              Get Involved
            </Link>
            <Link
              to='/'
              className={styles["link"]}
            >
              Become a Tutor
            </Link>
            <Link
              to='/'
              className={styles["link"]}
            >
              Become a Mentor
            </Link>
            <Link
              href='/'
              className={styles["link"]}
            >
              Explore Other Positions
            </Link>
          </div>
        </div>
        <div className={styles["main-column"]}>
          <img
            src={Logo}
            alt='EduVisa'
            className={styles["logo"]}
          />
          <p className={styles["copyright-text"]}>
            &copy; 2020 by The EduVisa Community, a 501(c)(3) nonprofit organization
          </p>
          <div className={styles["socials"]}>
            <Link to='/'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={styles["social"]}
              />
            </Link>
            <Link to='/'>
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className={styles["social"]}
              />
            </Link>
            <Link to='/'>
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles["social"]}
              />
            </Link>
            <Link to='/'>
              <FontAwesomeIcon
                icon={faYoutube}
                className={styles["social"]}
              />
            </Link>
            <Link to='/'>
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles["social"]}
              />
            </Link>
            <Link to='/'>
              <FontAwesomeIcon
                icon={faTwitter}
                className={styles["social"]}
              />
            </Link>
          </div>
        </div>
        <div className={styles["subcolumn"]}>
          <h2 className={styles["column-header"]}>Community Programs</h2>
          <div className={styles["links"]}>
            <Link
              to='/'
              className={styles["link"]}
            >
              Discord Server
            </Link>
            <Link
              to='/'
              className={styles["link"]}
            >
              Apply for a Tutor
            </Link>
            <Link
              to='/'
              className={styles["link"]}
            >
              Apply for a Mentor
            </Link>
            <Link
              to='/'
              className={styles["link"]}
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>
      <div className={styles["phone-container"]}>
        <div className={styles["main-column"]}>
          <img
            src={Logo}
            alt='EduVisa'
            className={styles["logo"]}
          />
          <p className={styles["copyright-text"]}>
            &copy; 2020 by The EduVisa Community, a 501(c)(3) nonprofit organization
          </p>
        </div>
        <div className={styles["subcolumn"]}>
          <h2 className={styles["column-header"]}>Join Us</h2>
          <div className={styles["links"]}>
            <Link
              to='/'
              className={styles["link"]}
            >
              Get Involved
            </Link>
            <Link
              to='/'
              className={styles["link"]}
            >
              Become a Tutor
            </Link>
            <Link
              to='/'
              className={styles["link"]}
            >
              Become a Mentor
            </Link>
            <Link
              href='/'
              className={styles["link"]}
            >
              Explore Other Positions
            </Link>
          </div>
        </div>

        <div className={styles["subcolumn"]}>
          <h2 className={styles["column-header"]}>Community Programs</h2>
          <div className={styles["links"]}>
            <Link
              to='/'
              className={styles["link"]}
            >
              Discord Server
            </Link>
            <Link
              to='/'
              className={styles["link"]}
            >
              Apply for a Tutor
            </Link>
            <Link
              to='/'
              className={styles["link"]}
            >
              Apply for a Mentor
            </Link>
            <Link
              to='/'
              className={styles["link"]}
            >
              Upcoming Events
            </Link>
          </div>
        </div>

        <div className={styles["socials"]}>
          <Link to='/'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles["social"]}
            />
          </Link>
          <Link to='/'>
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className={styles["social"]}
            />
          </Link>
          <Link to='/'>
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles["social"]}
            />
          </Link>
          <Link to='/'>
            <FontAwesomeIcon
              icon={faYoutube}
              className={styles["social"]}
            />
          </Link>
          <Link to='/'>
            <FontAwesomeIcon
              icon={faLinkedin}
              className={styles["social"]}
            />
          </Link>
          <Link to='/'>
            <FontAwesomeIcon
              icon={faTwitter}
              className={styles["social"]}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
