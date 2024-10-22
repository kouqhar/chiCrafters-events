import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

//  Components
// import Aux from "../_Aux/_Aux";
import ToolBar from "../../components/Navigation/NavItems/ToolBar";
import SideDrawer from "../../components/Navigation/NavItems/SideDrawer";
import Footer from "../../components/Navigation/Footer";
import styles from "./styles/styles.module.css";

const Layout = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [hideSideDrawer, setHideSideDrawer] = useState(null);
  const toTopRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    toTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setHideSideDrawer(false);
    setShowSideDrawer(!showSideDrawer);
  };

  const hideSideDrawerToggleHandler = () => {
    setHideSideDrawer(true);
    setShowSideDrawer(false);
  };

  return (
    <div ref={toTopRef}>
      <ToolBar />
      <SideDrawer
        closed={sideDrawerClosedHandler}
        sideDrawerShow={showSideDrawer}
        sideDrawerHide={hideSideDrawer}
        toggle={sideDrawerToggleHandler}
        hideSideBarHandler={hideSideDrawerToggleHandler}
      />
      <main className={styles.main_container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
