import { useEffect } from "react";

const donateLink = "https://www.paypal.com/paypalme/eduvisa";

const DonatePage = () => {
  useEffect(() => {
    window.location.replace(donateLink);
  }, []);

  return (
    <div>
      <h1>Redirecting....</h1>
    </div>
  );
};

export default DonatePage;
