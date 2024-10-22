import Nav from "../NavItem";

// Styles
import styles from "./styles/styles.module.css";

const SideDrawer = () => {
  return (
    <header className={[styles.Header_Mobile, "Header_Mobile"].join(" ")}>
      <Nav />
    </header>
  );
};

export default SideDrawer;
