import styles from "./ResourcesSat.module.scss";

const ResourcesSat = () => {
  return (
    <div className={styles["list-group"]} style={{ paddingBottom: "25px" }}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1q318_LqZYj_h0BWgfsov5CAEyDou3AYQ/view?usp=sharing"
        className={`${styles["list-group-item"]} ${styles.active} ${styles["list-group-item-action"]}`}
      >
        General Tips for the SAT (very important)
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1m8QYQ9SR9N6Qo9IjDNrFvf5P4PSZoVSg/view?usp=sharing"
        className={`${styles["list-group-item"]} ${styles.active} ${styles["list-group-item-action"]}`}
      >
        Literature and History passages from SAT, PSAT, and Khan Academy
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/presentation/d/1SuWwDd3-MUmUeGAK_8DW54InzZQT098p/edit#slide=id.g116cfcec3fe_0_42"
        className={`${styles["list-group-item"]} ${styles.active} ${styles["list-group-item-action"]}`}
      >
        Explore our SAT/ACT panel
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://blog.prepscholar.com/the-complete-guide-to-sat-grammar-rules"
        className={`${styles["list-group-item"]} ${styles.active} ${styles["list-group-item-action"]}`}
      >
        Complete Guide to SAT Grammar Rules by PrepScholar
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://blog.prepscholar.com/whats-actually-tested-on-sat-math-topics"
        className={`${styles["list-group-item"]} ${styles.active} ${styles["list-group-item-action"]}`}
      >
        What’s actually tested on the Math section by PrepScholar
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://cdn.discordapp.com/attachments/844241226956800091/883516175647125524/unknown.png"
        className={`${styles["list-group-item"]} ${styles.active} ${styles["list-group-item-action"]}`}
      >
        SAT Punctuation Rules
      </a>
      <div className={styles["grey-container"]}>
        <h1 className={styles["books-class"]}>Recommended Books</h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1jHygcu4Mj099y7PuDqfmEAHxl9-NpgQG/view?usp=sharing"
          className={`${styles["list-group-item"]} ${styles.active} ${styles["list-group-item-action"]}`}
        >
          Erica Meltzer's Reading Guide
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1V2oyAcgy_XiekKxSrnnNz6C4sQ8wtCXg/view?usp=sharing"
          className={`${styles["list-group-item"]} ${styles.active} ${styles["list-group-item-action"]}`}
        >
          Erica Meltzer's Ultimate Guide to SAT Grammar
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1mEwZaSpqF1A34fp-QvD0qlfNC_KZ7i2P/view?usp=sharing"
          className={`${styles["list-group-item"]} ${styles.active} ${styles["list-group-item-action"]}`}
        >
          McGraw Hill Prep Book
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1LXXf0WRV6ac88NXOhznaYRimeNvi3SHq/view?usp=sharing"
          className={`${styles["list-group-item"]} ${styles.active} ${styles["list-group-item-action"]}`}
        >
          SAT Prep Black Book: The Most Effective SAT Strategies Ever Published
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1BXUPpPPlMAZYLoM10eVUapZJYbFwJK67/view?usp=sharing"
          className={`${styles["list-group-item"]} ${styles.active} ${styles["list-group-item-action"]}`}
        >
          Gruber's Complete SAT Guide
        </a>
      </div>
    </div>
  );
};

export default ResourcesSat;
