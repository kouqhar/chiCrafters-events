/* eslint-disable react/prop-types */

// Styles
import styles from "./styles/styles.module.css";

const PortfolioComponent = ({ images }) => {
  return (
    <div className={styles.images}>
      <div className={styles.images_content}>
        {images.length > 0 &&
          images.map((img, idx) => {
            let output = <img key={`${idx}`} src={img} alt="Event Image" />;

            if (img.type || img.image)
              output = (
                <img
                  key={`${img.type}-${idx}`}
                  src={img.image}
                  alt={img.type}
                />
              );

            return output;
          })}
      </div>
    </div>
  );
};

export default PortfolioComponent;
