import pizza from "../assets/Images/pizza_feature.jpg";
import fish from "../assets/Images/fish_feature.jpg";
import cinnamon from "../assets/Images/cinnamon_feature.jpg";
import salad from "../assets/Images/salad_feature.jpg";
import { RiFileList2Line } from "react-icons/ri";
import { IoFitnessOutline } from "react-icons/io5";
import { MdFitnessCenter } from "react-icons/md";

export const features = [
  {
    id: 0,
    title: "Daily Diet Assistant",
    description:
      "Lorem ipsum dolor sit amet. Sed expedita internos ut alias ducimus quo autem expedita est debitis consequatur aut consectetur quis ut architecto fugit est iste doloribus. Est omnis numquam rem dolores dolor qui maxime accusamus et sint veniam non velit sunt. Qui tempora consequatur qui sint facere.",
    image: pizza,
    link: "#calculator",
    altLink: "/builder",
  },
  {
    id: 1,
    title: "Daily Diet Assistant",
    description:
      "Lorem ipsum dolor sit amet. Sed expedita internos ut alias ducimus quo autem expedita est debitis consequatur aut consectetur quis ut architecto fugit est iste doloribus. Est omnis numquam rem dolores dolor qui maxime accusamus et sint veniam non velit sunt. Qui tempora consequatur qui sint facere ",
    image: fish,
    link: "test1",
    altLink: "/builder",
  },
  {
    id: 2,
    title: "three",
    description:
      "Lorem ipsum dolor sit amet. Sed expedita internos ut alias ducimus quo autem expedita est debitis consequatur aut consectetur quis ut architecto fugit est iste doloribus. Est omnis numquam rem dolores dolor qui maxime accusamus et sint veniam non velit sunt. Qui tempora consequatur qui sint facere",

    image: cinnamon,
    link: "test2",
    altLink: "/builder",
  },
  {
    id: 3,
    title: "four",
    description:
      "Lorem ipsum dolor sit amet. Sed expedita internos ut alias ducimus quo autem expedita est debitis consequatur aut consectetur quis ut architecto fugit est iste doloribus. Est omnis numquam rem dolores dolor qui maxime accusamus et sint veniam non velit sunt. Qui tempora consequatur qui sint sed distinctio et modi.",

    image: salad,
    link: "test3",
    altLink: "/builder",
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
    primary: "Basis of ",
    secondary: "diet",
  },
];
