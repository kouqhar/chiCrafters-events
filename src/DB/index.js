import {
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaFacebookF,
  FaPhone,
  FaRegMessage,
} from "react-icons/fa6";
import { Images } from "./Images";
const lorem = `
        Illum doloremque magnam quaerat odio, consequatur eos non voluptatum quidem? Hic, quisquam consequuntur temporibus maiores quidem quas blanditiis ea excepturi incidunt, facere, non itaque. Dolorum quae expedita in minus repudiandae.
        Veritatis, hic quis aliquid consequuntur delectus facilis quos perferendis, dolores iusto repudiandae error aut deserunt laborum illo commodi autem! Dicta aut modi fugiat nostrum corrupti voluptatum debitis accusamus iste assumenda.
        Qui vitae ad itaque obcaecati sunt, nisi similique optio odio aliquid nostrum alias delectus pariatur est laborum dignissimos. Velit excepturi reprehenderit error veritatis molestiae saepe dolore blanditiis ex temporibus aut?
        Deleniti dolor ratione, pariatur fuga nulla neque aperiam ducimus, iusto aspernatur perspiciatis beatae sequi, ad architecto. Ipsam eos, similique provident laboriosam suscipit rem recusandae eveniet, ratione dolores fuga libero facilis?
`;

// Utils
import { Existence, START_YEAR } from "../utils";

// Variables
const { concert3, concert1, concert2, concert4 } = Images;

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
  ApplicationName: "chiCrafters Event",
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

const AboutPage = [
  {
    title: "who we are",
    description: lorem,
  },
  {
    title: "what we do",
    description: lorem,
    image: concert1,
  },
  {
    title: "our clients",
    description: lorem,
    image: concert3,
  },
];

const ServicesPage = [
  {
    title: "high profile events",
    description: lorem,
  },
  {
    title: "corporate events",
    description: lorem,
    image: concert1,
  },
  {
    title: "weddings",
    description: lorem,
    image: concert3,
  },
  {
    title: "vip events",
    description: lorem,
    image: concert2,
  },
  {
    title: "off the chart events",
    description: lorem,
    image: concert4,
  },
];

const PortfolioPage = [
  {
    image: concert1,
    type: "wedding",
  },
  {
    image: concert3,
    type: "corporate",
  },
  {
    image: concert2,
    type: "wedding",
  },
  {
    image: concert4,
    type: "birthday",
  },
  {
    image: concert2,
    type: "corporate",
  },
  {
    image: concert1,
    type: "wedding",
  },
  {
    image: concert4,
    type: "birthday",
  },
  {
    image: concert3,
    type: "corporate",
  },
  {
    image: concert2,
    type: "birthday",
  },
];

export {
  Navigation,
  Contacts,
  ContactForm,
  About,
  AboutPage,
  ServicesPage,
  PortfolioPage,
};
