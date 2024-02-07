import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const Button = ({ children, className, linktype = "inside", ...props }) => {
  let classes = styles["link"];

  if (className) {
    classes += " " + className;
  }

  if (linktype === "inside") {
    return (
      <Link
        className={classes}
        {...props}
      >
        {children}
      </Link>
    );
  } else if (linktype === "outside") {
    return (
      <a
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }
};

export default Button;
