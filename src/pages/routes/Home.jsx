import Header from "../../components/Header/Header";
import HomeSection from "../../components/HomeSection/HomeSection";
import Button from "../../components/UI/Button";
import Support from "../../components/HowWeSupportOurCommunity/Support";
import Videos from "../../components/HomeSection/Videos";

import { jobBoardLink } from "../redirects/Apply";
import { donateLink } from "../redirects/Donate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeSection
        text='Who We Are'
        details='Above all, EduVisa is a lively online community of students, sharing our journeys through high school and college. Our members come from all around the globe (over 80 countries!) and all walks of life. Beyond our community, EduVisa is also an academic support network, providing services like one-on-one tutoring and mentorship for our community members, free of charge.'
      />
      <Support />
      <HomeSection
        text='Join Our Team'
        details="We are always looking for high school and college students to help support our community! Whether you are good at art, like to post on social media, have great scores on tests and in school, want to share your college application journey with others, or like writing articles, there's always a position for you on our team!"
        button
        buttonElement={
          <Button
            href={jobBoardLink}
            linktype='outside'
          >
            get involved!
          </Button>
        }
      />
      <HomeSection
        text='Support Our Mission'
        details='As a 501(c)(3) non-profit, EduVisa relies on the generosity of donors to keep our organization running smoothly and to continue providing our community programs (like tutoring and mentorship) free of charge. All donations, no matter how small, go directly to helping us reach more students and maintain our worldwide community.'
        isLightBackground
        button
        buttonElement={
          <Button
            href={donateLink}
            linktype='outside'
          >
            <FontAwesomeIcon icon={faPaypal} />
            &nbsp;&nbsp;donate now!
          </Button>
        }
      />
      <Videos />
    </div>
  );
};

export default HomePage;
