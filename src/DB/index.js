import {
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaFacebookF,
  FaPhone,
  FaRegMessage,
} from "react-icons/fa6";

// Utils
import { Existence, START_YEAR } from "../utils";

const Navigation = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/portfolio",
    title: "Portfolio",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

const Contacts = [
  {
    title: "Address",
    Icon: FaXTwitter,
    contact: [
      { detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    ],
  },
  {
    title: "Phone",
    Icon: FaPhone,
    contact: [
      { text: "Office", detail: "+123456789" },
      { text: "Mobile", detail: "+2341256789" },
    ],
  },
  {
    title: "Email",
    Icon: FaRegMessage,
    contact: [{ detail: "contactkouqhar@duck.com" }],
  },
];

const ContactForm = [
  {
    placeholder: "Full name",
    id: "fullname",
    label: "Full Name",
    type: "",
    required: true,
  },
  {
    placeholder: "Email address",
    id: "emailaddress",
    label: "Email Address",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2, }$",
    required: true,
  },
  {
    placeholder: "Phone number",
    id: "phonenumber",
    label: "Phone Number",
    type: "tel",
    pattern: "[0-9]{2, 3}[0-9]{2, 4}[0-9]{3, 4}",
    required: true,
  },
  {
    placeholder: "Event description",
    id: "description",
    label: "Description",
    type: "",
    required: false,
  },
];

const About = {
  ApplicationName: "Vida Event",
  HomeDescription:
    "GlobalGateway is an affordable all-in-one ticketing and marketing platform that offers great value for your money. With GlobalGateway, you can easily sell event tickets online and reach your target audience for a cheap price.",
  dates: { Existence, START_YEAR },
  socials: [
    {
      social: "Email",
      Icon: FaRegMessage,
      contact: "contactkouqhar@duck.com",
    },
    {
      social: "Instagram",
      Icon: FaInstagram,
      contact: "kouqhar",
    },
    {
      social: "Whatsapp",
      Icon: FaWhatsapp,
      contact: "123456798",
    },
    {
      social: "Facebook",
      Icon: FaFacebookF,
      contact: "duniya.naphtali",
    },
    {
      social: "X FKA Twitter",
      Icon: FaXTwitter,
      contact: "kouqhar",
    },
    {
      social: "Telephone",
      Icon: FaPhone,
      contact: "123456789",
    },
  ],
};

export { Navigation, Contacts, ContactForm, About };
