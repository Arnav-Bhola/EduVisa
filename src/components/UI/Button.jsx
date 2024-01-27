import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const Button = ({ children, className, ...props }) => {
  let classes = styles["link"];

  if (className) {
    classes += " " + className;
  }

  return (
    <Link
      className={classes}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
