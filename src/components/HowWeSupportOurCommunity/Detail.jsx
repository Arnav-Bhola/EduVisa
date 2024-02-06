import styles from "./Detail.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Detail = ({ heading, details, icon, buttonElement: ButtonElement = null }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["top"]}>
        <FontAwesomeIcon
          icon={icon}
          className={styles["icon"]}
        />
        <h1 className={styles["heading"]}>{heading}</h1>
        <p className={styles["details"]}>{details}</p>
      </div>
      {ButtonElement}
    </div>
  );
};

export default Detail;
