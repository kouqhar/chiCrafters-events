/* eslint-disable react/prop-types */
// Components
// import Aux from "../../../Hoc/_Aux/_Aux"

// Styles
import styles from "./styles/styles.module.css";

// DB

const Banner = ({ bannerImage, bannerText }) => {
  return (
    <div
      className={styles.banner_container}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <h1 className={styles.banner_container__heading}>{bannerText}</h1>
    </div>
  );
};

export default Banner;
