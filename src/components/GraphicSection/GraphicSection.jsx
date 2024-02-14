import styles from "./GraphicSection.module.scss";

const GraphicSection = ({
  left = false,
  background = false,
  heading,
  detail1,
  detail2,
  image,
  buttonElement: ButtonElement = null,
}) => {
  let classes = styles["container"];
  classes += " ";
  if (left) {
    classes += styles["inverse"];
    classes += " ";
  }
  if (background) {
    classes += styles["background"];
  }

  return (
    <div className={classes}>
      <div className={styles["image-container"]}>
        <img
          src={image}
          alt='different teams'
          className={styles["image"]}
        />
      </div>
      <div className={styles["content"]}>
        <h2 className={styles["heading"]}>{heading}</h2>
        <p className={styles["details"]}>{detail1}</p>
        <p className={styles["details"]}>{detail2}</p>

        {/* <Button
          href={jobBoardLink}
          className={styles["button"]}
        >
          EXPLORE ALL OPEN POSITIONS
        </Button> */}
        {ButtonElement}
      </div>
    </div>
  );
};

export default GraphicSection;
