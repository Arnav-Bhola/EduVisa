import styles from "./HomeSection.module.scss";

const HomeSection = ({
  text = "",
  details = "",
  button = false,
  buttonElement: ButtonElement = null,
  className = "",
  isLightBackground = false,
}) => {
  let classes = `${styles["container"]} ${isLightBackground ? styles["light"] : ""}`;

  if (className !== "") {
    classes += ` ${className}`;
  }

  return (
    <div className={classes}>
      <div className={styles["row"]}>
        <h1 className={styles["heading"]}>{text}</h1>
        <hr className={styles["underline"]}></hr>
        <p className={styles["details"]}>{details}</p>
        <div className={styles["button-container"]}>{button && ButtonElement}</div>
      </div>
    </div>
  );
};

export default HomeSection;
