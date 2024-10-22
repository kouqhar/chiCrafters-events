import { useState, useEffect } from "react";

// Components
import Aux from "../../../Hoc/_Aux/_Aux";
import Banner from "../Banner/Banner";
import { Input, Button } from "../../UI";

// DB
import { Images } from "../../../DB/Images";
import { Contacts, ContactForm } from "../../../DB";

// Styles
import styles from "./styles/styles.module.css";

// Banner Image
const { concert1: banner } = Images;
const pageTitle = "Contact";

const Contact = () => {
  const [bookingDetails, setBookingDetails] = useState({});
  const [formReset, setFormReset] = useState(0);

  useEffect(() => {
    const partialObj = {};
    ContactForm.forEach(({ id }) => (partialObj[id] = ""));

    setBookingDetails(partialObj);
  }, [formReset]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted ", bookingDetails);

    // Form Reset
    setFormReset(formReset + 1);
  };

  const handleFormInput = (e) => {
    const { id, value } = e.target;
    setBookingDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const isBtnDisabled = Object.values(bookingDetails).every(
    (elem) => elem.length > 1
  );

  return (
    <Aux>
      <Banner bannerText={pageTitle} bannerImage={banner} />

      <div className={styles.contact_container}>
        <div className={styles.contact_container__content}>
          <div>
            {Contacts?.map(({ title, Icon, contact }) => (
              <div
                key={title}
                className={styles.contact_container__content___contact}
              >
                {/* Address Icon */}
                <div
                  className={
                    styles.contact_container__content___contact____icon
                  }
                >
                  <Icon />
                </div>

                <div
                  className={
                    styles.contact_container__content___contact____form
                  }
                >
                  <h2>{title}</h2>
                  <ul>
                    {contact.map((elem, idx) => (
                      <li key={idx}>
                        {elem.text && <span>{elem.text}:</span>}
                        {elem.detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.contact_container__content___message}>
            <h2>BOOKING</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptatibus earum vero optio ipsa quod? Provident
              praesentium, iste et vel ea suscipit repellendus maxime aut magni
              impedit quia eum molestiae!
            </p>

            <form onSubmit={handleFormSubmit}>
              {ContactForm.map(({ id, label, ...props }) => {
                return (
                  <div className="form_group" key={id}>
                    <Input
                      {...props}
                      uniqueIdentifier={id}
                      labelText={label}
                      onChange={handleFormInput}
                      value={bookingDetails[id]}
                    />
                  </div>
                );
              })}
              <Button type="submit" disabled={!isBtnDisabled}>
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default Contact;
