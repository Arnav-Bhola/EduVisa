import { useEffect } from "react";

export const discordLink = "https://discord.com/invite/9aFBhgf";

const Discord = () => {
  useEffect(() => {
    window.location.replace(discordLink);
  }, []);

  return (
    <div>
      <h1>Redirecting....</h1>
    </div>
  );
};

export default Discord;
