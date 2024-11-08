import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
// import Aux from "../../../Hoc/_Aux/_Aux"
import ImageCarousel from "../../UI/ImageCarousel";
import PortfolioComponent from "../../UI/PortfolioComponent";
import Information from "../../UI/Information";

// DB
import { PortfolioPage } from "../../../DB";
import { Images } from "../../../DB/Images";

// Styles
import styles from "./styles/styles.module.css";

const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto maiores modi, odio sint hic vel sapiente deleniti nihil fugiat, necessitatibus, iusto eum quae pariatur dignissimos cum facilis ut quaerat quo?
Reiciendis vero expedita quibusdam magni. Nihil perspiciatis enim ratione id, debitis illo obcaecati cum harum est at assumenda quia esse praesentium sapiente modi a. Soluta neque iste ab repellendus fugiat?
Dolorum dolorem totam at amet id magni necessitatibus dolores ex nam esse tempora praesentium libero, quisquam fugiat excepturi ad. Eius, expedita cum sed debitis atque eaque quae quam itaque incidunt.
Eos, saepe. Reprehenderit praesentium fugit fuga atque debitis sapiente aspernatur expedita error veritatis deserunt animi illo ullam, sed facilis beatae aperiam repudiandae exercitationem labore esse voluptas omnis consequatur deleniti. Veritatis!
Voluptates saepe, unde sapiente laudantium eos natus voluptatem iusto sunt atque veritatis accusamus architecto quo assumenda ducimus eligendi esse dolorum officia excepturi perferendis voluptatibus aut, suscipit impedit! A, quaerat culpa.
Voluptatum ab quidem tempore quisquam vitae, sunt fugit veniam officia sint, dicta accusantium ipsam eveniet quaerat doloribus natus. Vel deleniti voluptate libero aspernatur tempora impedit quidem adipisci velit magni fuga.`;

const { concert3, concert4 } = Images;
const [note, founder] = [
  {
    title: "CREATING UNFORGETABLE EXPERIENCES",
    description: lorem,
    image: concert3,
  },
  { title: "MEET OUT FOUNDER", description: lorem, image: concert4 },
];

const Home = () => {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    const images = PortfolioPage.slice(0, 6).map(({ image }) => image);

    setCarousel(images);
  }, []);

  return (
    <div className={styles.container}>
      <ImageCarousel images={carousel} />

      <div className={styles.container_content}>
        <div className={styles.container_content__portfolio}>
          <h2>BESPOKE EVENTS</h2>
          <PortfolioComponent images={carousel} />
          <Link to="/portfolio">VIEW PORTFOLIO</Link>
        </div>

        <div className={styles.container_content__note}>
          <Information {...note} />
        </div>

        <div className={styles.container_content__clients}>
          <h2>OUR CLIENTS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            earum voluptatem dolore impedit dignissimos id aliquid nisi sint
            reiciendis ducimus cupiditate eligendi dolorem distinctio aperiam,
            quaerat iure laborum nemo temporibus.
          </p>
        </div>

        <div className={styles.container_content__founder}>
          <Information {...founder} />
        </div>
      </div>
    </div>
  );
};

export default Home;
