import styles from "./Support.module.scss";

import Detail from "./Detail";
import Button from "../../components/UI/Button";

import {
  faChalkboardUser,
  faPenToSquare,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import { discordLink } from "../../pages/redirects/Discord";
import { eventsCalendarLink } from "../../pages/redirects/EventsCalendar";

const Support = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["row"]}>
        <h1 className={styles["heading"]}>How We Support Our Community</h1>
        <hr className={styles["underline"]}></hr>
        <p className={styles["details"]}>
          We know firsthand how tricky it can be to navigate through high school academics and the
          college admissions process. That&apos;s why EduVisa offers the following programs to
          support the members of our community,
          <strong>
            <em> all totally free of charge</em>
          </strong>
          ! To take advantage of these programs, please join us on Discord{" "}
          <a href={discordLink}>here</a>! If you are already a part of our community, you can apply
          for each of our programs below.
        </p>
        <div className={styles["subsections"]}>
          <Detail
            heading='Webinars'
            details='We regularly sponsor webinars hosted by community members and outside experts alike! They range from casual coffee chats to informational seminars, covering all aspects of high school and college. Our current webinar series focuses on the college admissions process.'
            icon={faChalkboardUser}
            buttonElement={
              <Button
                href={eventsCalendarLink}
                linktype='outside'
                className={styles["button"]}
              >
                our events calendar
              </Button>
            }
          />
          <Detail
            heading='Tutoring'
            details="Our expert instructors, all top scorers in their field, provide personalized, one-on-one tutoring for all subjects and standardized tests. To date, we've tutored over 500 students in 50 countries, and now we're here to help you get that A or your dream score!​"
            icon={faPenToSquare}
            buttonElement={
              <Button
                href='programs/tutoring'
                linktype='inside'
                className={styles["button"]}
              >
                get a tutor!
              </Button>
            }
          />
          <Detail
            heading='Mentorship'
            details='In our mentorship program, we match high school upperclassmen with undergraduates who help them make the most out of their high school experience and college application process, including essay review, resume building, scholarships, and more.'
            icon={faGraduationCap}
            buttonElement={
              <Button
                href='programs/mentorship'
                linktype='inside'
                className={styles["button"]}
              >
                match with a mentor!
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
