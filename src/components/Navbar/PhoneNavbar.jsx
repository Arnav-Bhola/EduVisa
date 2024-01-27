import { Link } from "react-router-dom";

import styles from "./PhoneNavbar.module.scss";

const PhoneNavbar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["links"]}>
        <Link
          to='/'
          className={styles["link"]}
        >
          who we are
        </Link>
        <Link
          to='/'
          className={styles["link"]}
        >
          what we do
        </Link>
        <Link
          to='/'
          className={styles["link"]}
        >
          resources
        </Link>
        <Link
          to='/'
          className={styles["link"]}
        >
          get involved
        </Link>
        <Link
          to='/'
          className={styles["link"]}
        >
          blog
        </Link>
        <Link
          to='/'
          className={styles["link"]}
        >
          donate
        </Link>
      </div>
    </div>
  );
};

export default PhoneNavbar;
