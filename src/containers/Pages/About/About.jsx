// Components
import Aux from "../../../Hoc/_Aux/_Aux";
import Banner from "../Banner/Banner";
import { Images } from "../../../DB/Images";
import { AboutPage } from "../../../DB";

// Styles
import styles from "./styles/styles.module.css";
import Information from "../../UI/Information";

// Banner Image
const { concert1: banner } = Images;

const About = () => {
  const pageTitle = "About";

  return (
    <Aux>
      <Banner bannerText={pageTitle} bannerImage={banner} />
      <div className={styles.about_container}>
        {AboutPage.map((about) => (
          <Information key={about.title} {...about} />
        ))}
      </div>
    </Aux>
  );
};

export default About;
