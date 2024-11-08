/* eslint-disable react/prop-types */
import styles from "./styles/styles.module.css";

const Information = ({ title, description, image }) => {
  return (
    <div className={[styles.information].join(" ")}>
      {image && (
        <div className={styles.information_image}>
          <img src={image} alt={title} />
        </div>
      )}
      <div className={styles.information_content}>
        <h1>{title.toUpperCase()}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Information;
