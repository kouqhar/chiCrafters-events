import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

// DB
import { Navigation, About } from "../../../../DB";
import { Images } from "../../../../DB/Images";

// Component
import NavItem from "./NavItem";
import Aux from "../../../../Hoc/_Aux/_Aux";

// Styles

const Nav = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const { officialLogo } = Images;
  const { ApplicationName } = About;

  const handleNavigationToggle = () =>
    setToggleNavigation((prevState) => !prevState);

  let NavigationStyle = "Mobile_Navigation ";
  toggleNavigation
    ? (NavigationStyle += "Nav_Mobile__Show")
    : (NavigationStyle += "Nav_Mobile__View");

  return (
    <Aux>
      <div className="header">
        <img
          src={officialLogo}
          alt="chiCrafters Event Logo"
          style={{ height: "5vh", width: "5vh" }}
        />
        <h1 className="hide_mobile">{ApplicationName}</h1>
        <h1 className="show_mobile">{ApplicationName}M</h1>
      </div>

      <>
        {/* Mobile view Only */}
        <div
          className="show_mobile navigation"
          onClick={handleNavigationToggle}
        >
          <div>{toggleNavigation ? <MdClose /> : <GiHamburgerMenu />}</div>
        </div>
      </>

      {/* Minimum of Tablet view */}
      <div className="Nav_Desktop__View">
        <ul>
          {Navigation.map(({ path, title }) => (
            <NavItem
              path={path}
              title={title}
              key={title.split(" ").join("_")}
            />
          ))}
        </ul>
      </div>

      {/* Mobile view Only */}
      <div className={NavigationStyle}>
        <ul>
          {Navigation.map(({ path, title }) => (
            <NavItem
              onClick={() => setToggleNavigation(false)}
              path={path}
              title={title}
              key={title.split(" ").join("_")}
            />
          ))}
        </ul>
      </div>
    </Aux>
  );
};

export default Nav;
