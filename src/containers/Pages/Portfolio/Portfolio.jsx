// Components
import Aux from "../../../Hoc/_Aux/_Aux";
import Banner from "../Banner/Banner";
import { Images } from "../../../DB/Images";

// Styles
import styles from "./styles/styles.module.css";

// Banner Image
const { concert2: banner } = Images;

const Portfolio = () => {
  const pageTitle = "Portfolio";

  return (
    <Aux>
      <Banner bannerText={pageTitle} bannerImage={banner} />
      <div className={styles.portfolio_container}></div>
    </Aux>
  );
};

export default Portfolio;
