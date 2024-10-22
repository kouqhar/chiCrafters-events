import Nav from "../NavItem";

// Styles
import styles from "./styles/styles.module.css";

const ToolBar = () => {
  return (
    <header className={[styles.Header_Desktop, "Header_Desktop"].join(" ")}>
      <Nav />
    </header>
  );
};

export default ToolBar;
