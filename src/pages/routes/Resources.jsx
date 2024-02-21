import styles from "./Resources.module.scss";

import GraphicSection from "../../components/GraphicSection/GraphicSection";
import Button from "../../components/UI/Button";

import satImage from "../../assets/images/resources/sat.png";
import apExamImage from "../../assets/images/resources/ap.png";
import actImage from "../../assets/images/resources/act.png";
import collegeAppsImage from "../../assets/images/resources/collegeapps.png";
import schoolSubjectsImage from "../../assets/images/resources/schoolsubjects.png";
import masterDocImage from "../../assets/images/resources/masterdoc.png";

const ResourcesPage = () => {
  return (
    <div className={styles["container"]}>
      <header className={styles["header"]}>
        <h1 className={styles["heading"]}>Resources</h1>
        <h2 className={styles["subheading"]}>Check out resources created by our community!</h2>
      </header>
      <GraphicSection
        image={satImage}
        heading='SAT'
        detail1='Resources give an overview of what the SAT is, along with notes and presentations specifically on the SAT Reading, Writing and Math sections. This includes reading tips, grammer and punctuation rules, and strategies for math.'
        buttonElement={
          <Button
            href={"https://www.google.com"}
            className={styles["button"]}
            linktype='outside'
          >
            EXPLORE SAT RESOURCES!
          </Button>
        }
      />
      <GraphicSection
        image={apExamImage}
        heading='AP Exams'
        detail1='AP resources including presentations, worksheets, and quizzes for further practice.'
        buttonElement={
          <Button
            href={"https://www.google.com"}
            linktype='outside'
            className={styles["button"]}
          >
            EXPLORE AP RESOURCES!
          </Button>
        }
        left
        background
      />
      <GraphicSection
        image={actImage}
        heading='ACT'
        detail1='Presentations and worksheets on ACT Science, Reading, Math, and Grammar.'
        buttonElement={
          <Button
            href={"https://www.google.com"}
            className={styles["button"]}
            linktype='outside'
          >
            EXPLORE ACT RESOURCES!
          </Button>
        }
      />
      <GraphicSection
        image={collegeAppsImage}
        heading='College Apps'
        detail1="Eduvisa's presentations regarding college applications and the college admission process."
        buttonElement={
          <Button
            href={"https://www.google.com"}
            linktype='outside'
            className={styles["button"]}
          >
            EXPLORE COLLEGE RESOURCES!
          </Button>
        }
        left
        background
      />
      <GraphicSection
        image={schoolSubjectsImage}
        heading='School Subjects'
        detail1='An abundance of Youtube channel recommendations for chemistry, physics, and calculus subjects.'
        buttonElement={
          <Button
            href={"https://www.google.com"}
            className={styles["button"]}
            linktype='outside'
          >
            EXPLORE SCHOOL RESOURCES!
          </Button>
        }
      />
      <GraphicSection
        image={masterDocImage}
        heading='Masterdoc'
        detail1='A collection of all our resources combined in one single document.'
        buttonElement={
          <Button
            href={"https://www.google.com"}
            linktype='outside'
            className={styles["button"]}
          >
            CHECK OUT THE MASTERDOC!
          </Button>
        }
        left
        background
      />
    </div>
  );
};

export default ResourcesPage;

{
  /* <GraphicSection
image={teamsImage}
heading='Check out our Job Board!'
detail1="We have dozens of ways in which you can help support our community, and we're always looking for extra hands."
detail2="Whether you love crafting eye-popping graphic design, capturing audiences on social media, writing informative and captivaing articles, tinkering with technology, or something else, we've got a spot for you on our team! Check out all of our roles below!"
buttonElement={
  <Button
    href={jobBoardLink}
    className={styles["button"]}
    linktype='outside'
  >
    EXPLORE ALL OPEN POSITIONS
  </Button>
}
/>
<GraphicSection
image={helpersImage}
heading='Get a Helper Role!'
detail1='Not interested in the above opportunites? No problem—We have countless helper roles available in our discord server.'
detail2="In order to get these roles, go to the roles channel in our discord server! From there, you can choose between multiple helper roles (college advice, math, science, and more). Now, a member will be able to notify you when they're stuck on the specific subjects that you picked, giving you an opportunity to step up and make a meaningful impact."
buttonElement={
  <Button
    href={discordLink}
    linktype='outside'
    className={styles["button"]}
  >
    JOIN EDUVISA&apos;S DISCORD SERVER
  </Button>
}
left
background
/> */
}
