// Components
import Aux from "../../../Hoc/_Aux/_Aux";
import Banner from "../Banner/Banner";
import { Images } from "../../../DB/Images";
import { ServicesPage } from "../../../DB";
import Information from "../../UI/Information";

// Styles
import styles from "./styles/styles.module.css";

// Banner Image
const { concert3: banner } = Images;

const Services = () => {
  const pageTitle = "Services";

  return (
    <Aux>
      <Banner bannerText={pageTitle} bannerImage={banner} />
      <div className={styles.services_container}>
        {ServicesPage.map((about) => (
          <Information key={about.title} {...about} />
        ))}
      </div>
    </Aux>
  );
};

export default Services;
