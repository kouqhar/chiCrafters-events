/* eslint-disable react/prop-types */
import { FaRegCopyright } from "react-icons/fa6";
import Aux from "../../../Hoc/_Aux/_Aux";

// DB
import { About } from "../../../DB";

// Styles
import styles from "./styles/styles.module.css";

const { dates, socials } = About;

const Footer = ({ className }) => {
  const isContactProvided = socials?.some(
    (social) =>
      Object.prototype.hasOwnProperty.call(social, "social") &&
      social.contact.length > 0
  );

  return (
    <footer className={[className, styles.Footer].join(" ")}>
      <div className={styles.Footer_contact}>
        {isContactProvided && (
          <Aux>
            <h2>Contact Vida Event</h2>
            <ul>
              {socials.map(({ contact, social, Icon }, idx, arr) => {
                const href = "";
                return Object.prototype.hasOwnProperty.call(
                  arr[idx],
                  "contact"
                ) && contact.length > 0 ? (
                  <li key={`${social}-${contact}`}>
                    <a href={href} className={styles}>
                      <Icon />
                    </a>
                  </li>
                ) : null;
              })}
            </ul>
          </Aux>
        )}
      </div>
      <FaRegCopyright /> {dates?.START_YEAR} Vida Events. All Rights Reserved.
    </footer>
  );
};

export default Footer;
