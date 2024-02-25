import { useParams } from "react-router-dom";
import styles from "./ResourcesList.module.scss";
import ResourcesSat from "../../components/Resources/ResourcesSat";

const ResourcesList = () => {
  const { id } = useParams();

  return (
    <div className={styles["container"]}>
      <header className={styles["header"]}>
        <h1 className={styles["heading"]}>SAT Resources</h1>
        <h2 className={styles["subheading"]}>
          Explore the SAT resources created by our community!
        </h2>
      </header>
      {id === "sat" && (<ResourcesSat/>)}
      {id === "apexams" && <p>Content for /resources/apexams</p>}
      {id !== "sat" && id !== "orange" && <p>PageNotExists</p>}
    </div>
  );
};

export default ResourcesList;
