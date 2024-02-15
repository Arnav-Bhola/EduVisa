import styles from "./GetInvolved.module.scss";

import teamsImage from "../../assets/images/get-involved/teams.png";
import helpersImage from "../../assets/images/get-involved/helpers.png";

import GraphicSection from "../../components/GraphicSection/GraphicSection";
import Button from "../../components/UI/Button";

import { jobBoardLink } from "../../pages/redirects/Apply";
import { discordLink } from "../../pages/redirects/Discord";

const GetInvolvedPage = () => {
  return (
    <div className={styles["container"]}>
      <header className={styles["header"]}>
        <h1 className={styles["heading"]}>Get Involved!</h1>
        <h2 className={styles["subheading"]}>
          Our community relies on the hard work of countless volunteers. Join our team!
        </h2>
      </header>
      <GraphicSection
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
      />
    </div>
  );
};

export default GetInvolvedPage;
