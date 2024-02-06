import { useEffect } from "react";

export const eventsCalendarLink = "https://lu.ma/u/eduvisa";

const EventsCalendar = () => {
  useEffect(() => {
    window.location.replace(eventsCalendarLink);
  }, []);

  return (
    <div>
      <h1>Redirecting....</h1>
    </div>
  );
};

export default EventsCalendar;
