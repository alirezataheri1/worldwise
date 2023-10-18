// import { Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

import styles from "./AppLayout.module.css";
// import { useEffect } from "react";
// import { useAuth } from "../contexts/FakeAuthContext";

function AppLayout() {
  // const navigate = useNavigate();
  // const { isAuthenticated } = useAuth();

  // useEffect(function () {
  //   if (!isAuthenticated) navigate("/");
  // });

  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
