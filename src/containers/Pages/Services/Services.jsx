// Components
import Aux from "../../../Hoc/_Aux/_Aux";
import Banner from "../Banner/Banner";
import { Images } from "../../../DB/Images";

// Styles
import styles from "./styles/styles.module.css";

// Banner Image
const { concert3: banner } = Images;

const Services = () => {
  const pageTitle = "Services";

  return (
    <Aux>
      <Banner bannerText={pageTitle} bannerImage={banner} />
      <div className={styles.services_container}></div>
    </Aux>
  );
};

export default Services;
