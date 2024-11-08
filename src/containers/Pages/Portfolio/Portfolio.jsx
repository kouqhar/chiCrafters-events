import { useEffect, useState } from "react";

// Components
import Aux from "../../../Hoc/_Aux/_Aux";
import Banner from "../Banner/Banner";
import { Images } from "../../../DB/Images";

// Styles
import styles from "./styles/styles.module.css";
import { PortfolioPage } from "../../../DB";
import { capitalizeWord } from "../../../utils";

// Banner Image
const { concert2: banner } = Images;

const Portfolio = () => {
  const pageTitle = "Portfolio";
  const [query, setQuery] = useState("all");
  const [gallery, setGallery] = useState([]);
  const [filters, setFilters] = useState(["all"]);

  useEffect(() => {
    const filterTypes = new Set();

    PortfolioPage.forEach(({ type }) => filterTypes.add(type));
    setGallery(PortfolioPage);
    setFilters(["all", ...filterTypes]);
  }, []);

  let filteredGallery;
  if (query.toLowerCase() === "all") filteredGallery = gallery;
  else
    filteredGallery = gallery.filter(
      ({ type }) => type.toLowerCase() === query.toLowerCase()
    );

  if (filteredGallery.length < 1)
    return <div className="loading">Loading . . .</div>;

  return (
    <Aux>
      <Banner bannerText={pageTitle} bannerImage={banner} />
      <div className={styles.portfolio_container}>
        <div className={styles.portfolio_container__heading}>
          <h2>BESPOKE EVENTS</h2>
          <div className={styles.portfolio_container__heading___filter}>
            {filters.length > 1 &&
              filters.map((filter, idx) => (
                <p
                  className={
                    filter.toLowerCase() === query.toLowerCase() ? "active" : ""
                  }
                  key={`${filter}-${idx}`}
                  onClick={() => setQuery(filter)}
                >
                  {capitalizeWord(filter)}
                </p>
              ))}
          </div>
        </div>
        <div className={styles.portfolio_container__images}>
          <div className={styles.portfolio_container__images___content}>
            {filteredGallery.length > 0 &&
              filteredGallery.map(({ image, type }, idx) => (
                <img key={`${type}-${idx}`} src={image} alt={type} />
              ))}
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default Portfolio;
