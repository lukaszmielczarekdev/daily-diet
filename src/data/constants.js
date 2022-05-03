import pizza from "../assets/Images/pizza.png";
import salad5 from "../assets/Images/salad5.png";
import salad3 from "../assets/Images/salad3.png";
import salad from "../assets/Images/salad.jpg";
import { RiFileList2Line } from "react-icons/ri";
import { IoFitnessOutline } from "react-icons/io5";
import { MdFitnessCenter } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdAccessTime } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

export const features = [
  {
    id: 0,
    titlePrimary: "Daily Diet Assistant",
    titleSecondary: "Daily Diet Assistant",
    description:
      "Lorem ipsum dolor sit amet. Sed expedita internos ut alias ducimus quo autem expedita est debitis consequatur aut consectetur quis ut architecto fugit est iste doloribus. Est omnis numquam rem dolores dolor qui maxime accusamus et sint veniam non velit sunt. Qui tempora consequatur qui sint facere.",
    image: pizza,
    link: "#calculator",
    altLink: "/builder",
    alt: "pizza",
  },
  {
    id: 1,
    titlePrimary: "Daily Diet Assistant",
    titleSecondary: "Daily Diet Assistant",
    description:
      "Lorem ipsum dolor sit amet. Sed expedita internos ut alias ducimus quo autem expedita est debitis consequatur aut consectetur quis ut architecto fugit est iste doloribus. Est omnis numquam rem dolores dolor qui maxime accusamus et sint veniam non velit sunt. Qui tempora consequatur qui sint facere ",
    image: salad3,
    link: "test1",
    altLink: "/builder",
    alt: "fish",
  },
  {
    id: 2,
    titlePrimary: "Daily Diet Assistant",
    titleSecondary: "three",
    description:
      "Lorem ipsum dolor sit amet. Sed expedita internos ut alias ducimus quo autem expedita est debitis consequatur aut consectetur quis ut architecto fugit est iste doloribus. Est omnis numquam rem dolores dolor qui maxime accusamus et sint veniam non velit sunt. Qui tempora consequatur qui sint facere",

    image: salad5,
    link: "test2",
    altLink: "/builder",
    alt: "cinnamon",
  },
  {
    id: 3,
    titlePrimary: "Daily Diet Assistant",
    titleSecondary: "four",
    description:
      "Lorem ipsum dolor sit amet. Sed expedita internos ut alias ducimus quo autem expedita est debitis consequatur aut consectetur quis ut architecto fugit est iste doloribus. Est omnis numquam rem dolores dolor qui maxime accusamus et sint veniam non velit sunt. Qui tempora consequatur qui sint sed distinctio et modi.",

    image: salad,
    link: "test3",
    altLink: "/builder",
    alt: "salad",
  },
];

export const attributes = [
  {
    id: 0,
    icon: <IoFitnessOutline size={"100%"} color="red" />,
    primary: "Weight",
    secondary: "control",
  },
  {
    id: 1,
    icon: <MdFitnessCenter size={"100%"} color="green" />,
    primary: "Workout",
    secondary: "plan",
  },
  {
    id: 2,
    icon: <RiFileList2Line size={"100%"} color="orange" />,
    primary: "Better",
    secondary: "results",
  },
];

export const diaryAttributes = [
  {
    id: 0,
    icon: <BiEdit size={"100%"} color="red" />,
    primary: "Highly",
    secondary: "customizable",
  },
  {
    id: 1,
    icon: <MdAccessTime size={"100%"} color="green" />,
    primary: "Easily",
    secondary: "accessible",
  },
  {
    id: 2,
    icon: <BsBook size={"100%"} color="orange" />,
    primary: "Easy",
    secondary: "to use",
  },
];

export const meals = [
  {
    id: 0,
    image: salad5,
    primary: "salad",
    secondary: "salad is good",
    description: "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdf",
  },
  {
    id: 1,
    image: salad5,
    primary: "salad",
    secondary: "salad is good",
    description: "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdf",
  },
  {
    id: 2,
    image: salad5,
    primary: "salad",
    secondary: "salad is good",
    description: "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdf",
  },
];

export const tips = [
  {
    id: 0,
    color: "red",
    icon: <IoFastFoodOutline size={"100%"} />,
    header: "salad is good",
    description:
      "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdf hbgcfg hvhgc hghf d fgvfcd d rdf",
  },
  {
    id: 1,
    color: "green",
    icon: <IoFastFoodOutline size={"100%"} />,
    header: "salad is good",
    description:
      "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdf hbgcfg hvhgc hghf d fgvfcd d rdf",
  },
  {
    id: 2,
    color: "yellow",
    icon: <IoFastFoodOutline size={"100%"} />,
    header: "salad is good",
    description:
      "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdfh bgcfg hvhgc hghf d fgvfcd d rdf",
  },
];
