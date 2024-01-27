import { useEffect } from "react";

const jobBoardLink =
  "https://cloud-mars-a91.notion.site/Job-Board-ea2c739f2c744d9fb585752b09d8cc5d";

const ApplyPage = () => {
  useEffect(() => {
    window.location.replace(jobBoardLink);
  }, []);

  return (
    <div>
      <h1>Redirecting....</h1>
    </div>
  );
};

export default ApplyPage;
