import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

const EventLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default EventLayout;
