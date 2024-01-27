import styles from "./Header.module.scss";

import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["text"]}>
        <h1 className={styles["heading"]}>Welcome to the EduVisa Community!</h1>
        <p className={styles["description"]}>
          We&apos;re a global community of students, by students, for students, in a time when
          we&apos;re as disconnected as ever.
        </p>
        <Button className={styles["button"]}>
          {" "}
          <FontAwesomeIcon icon={faDiscord} /> &nbsp; join us on discord!
        </Button>
      </div>
    </div>
  );
};

export default Header;
