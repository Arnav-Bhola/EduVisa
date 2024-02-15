import styles from "./Videos.module.scss";
import Button from "../UI/Button";

const Videos = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["row"]}>
        <h1 className={styles["heading"]}>Our Recent Content</h1>
        <hr className={styles["underline"]}></hr>
        <div className={styles["subsections"]}>
          <div className={styles["webinar-video"]}>
            <iframe
              width='350'
              height='196.875'
              src={`https://www.youtube.com/embed/DVaMoPL6u7g`}
              title='Webinar Video'
              allowFullScreen
              className={styles["video"]}
            ></iframe>{" "}
          </div>
          <div className={styles["webinar-video"]}>
            <iframe
              width='350'
              height='196.875'
              src={`https://www.youtube.com/embed/HMJSOhqv2zA`}
              title='Webinar Video'
              allowFullScreen
              className={styles["video"]}
            ></iframe>
          </div>
          <div className={styles["webinar-video"]}>
            <iframe
              src={`https://www.youtube.com/embed/glni5hXBc1E`}
              title='Webinar Video'
              allowFullScreen
              width='350'
              height='196.875'
              className={styles["video"]}
            ></iframe>{" "}
          </div>
        </div>

        <div className={styles["button-container"]}>
          {
            <Button
              href='https://www.youtube.com/channel/UC6KGOBlBVm8yp172XAoNKdQ'
              linktype='outside'
              className={styles["button"]}
            >
              our youtube
            </Button>
          }
          {
            <Button
              href='https://myeduvisa.org/blog/'
              linktype='outside'
              className={styles["button"]}
            >
              our blogs
            </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default Videos;
