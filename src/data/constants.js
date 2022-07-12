import pizza from "../assets/Images/pizza.png";
import salad5 from "../assets/Images/salad5.png";
import salad3 from "../assets/Images/salad3.png";
import salad2 from "../assets/Images/salad2.png";
import salad4 from "../assets/Images/salad4.png";
import salad from "../assets/Images/salad.jpg";
import yerba_article from "../assets/Images/yerba_article.jpg";
import pizza_article from "../assets/Images/pizza_article.jpg";
import nuts_article from "../assets/Images/nuts_article.jpg";
import {
  RiFileList2Line,
  RiNumbersLine,
  RiAccountCircleLine,
} from "react-icons/ri";
import { IoFitnessOutline } from "react-icons/io5";
import { MdFitnessCenter } from "react-icons/md";
import { BsBook, BsClock } from "react-icons/bs";
import { BiEdit, BiLike, BiSearchAlt } from "react-icons/bi";
import { MdAccessTime } from "react-icons/md";
import {
  IoFastFoodOutline,
  IoRestaurantOutline,
  IoWaterOutline,
} from "react-icons/io5";
import { IoMdCreate } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
import { GiWeightLiftingUp, GiProgression } from "react-icons/gi";
import { AiOutlineCalculator, AiOutlinePercentage } from "react-icons/ai";

export const features = [
  {
    id: 0,
    titlePrimary: "Daily Diet",
    titleSecondary: "Assistant",
    description:
      "A diet diary is the easiest and fastest way to keep track of your diet. Thanks to this, we are able to notice our mistakes and avoid them in the future. It often happens that our diet seems to be refined. However, it may turn out that our nutrition is far from ideal. It is a good idea to write down the food you eat, preferably in the form of a diary.\n\nPeople who introduce physical activity into their lives usually have two goals. Some people want to gain weight, others try to lose excess body fat. In both cases, there is a topic related to matching the right diet.\n\nDaily Diet helps you to structure your diet according to the daily caloric requirement broken down into adequate amounts of fats, proteins and carbohydrates per kilogram of body weight.",
    image: pizza,
    link: "/builder#top",
    altLink: "/auth#top",
    alt: "pizza",
  },
  {
    id: 1,
    titlePrimary: "Mass diet",
    titleSecondary: "The basics",
    description:
      "A diet for muscle mass is based primarily on the increased caloric content of meals. However, the caloric surplus cannot constitute bad-quality products, because the diet for building mass must be fully subordinated to the principles of healthy and rational nutrition. The caloric surplus is determined individually and depends on the advancement of training, at the beginning you can add 200 - 300 kcal and observe the effects.\n\nThe menu in a diet for building muscle mass should, of course, be varied and fully balanced. It is good when it includes lean fish and meat, vegetables, fruit, dairy products (e.g. cottage cheese, natural yoghurt) and whole grain products (e.g. dark bread, oatmeal).",
    image: salad3,
    link: "/builder#top",
    altLink: "/auth#top",
    alt: "chicken meal",
  },
  {
    id: 2,
    titlePrimary: "Diet for weight loss",
    titleSecondary: "In a nutshell",
    description:
      "On fat reduction diet your goal is to reduce the number of calories consumed. The reduction must not be drastic as this could lead to a slower metabolic rate and you will feel hungry forever.\nThe number of limited calories depends on the effects we want to achieve. You can start by cutting 300-500 kcal and check your progress.\n\nThe source of carbohydrates should be products with a low glycemic index, such as whole grain pasta and bread, brown rice or coarse grain groats.\nProtein should be consumed from eggs, lean meats and fish, and from dairy products such as cottage cheese, or from legume seeds.\nFats - mainly unsaturated fatty acids like olive oil, rapeseed oil, nuts, pumpkin or sunflower seeds, as well as fatty fish such as salmon, mackerel or herring. Animal fats should be reduced.",

    image: salad,
    link: "/builder#top",
    altLink: "/auth#top",
    alt: "salad meal",
  },
];

export const attributes = [
  {
    id: 0,
    icon: <IoFitnessOutline size={"100%"} color="green" />,
    primary: "Weight",
    secondary: "control",
  },
  {
    id: 1,
    icon: <MdFitnessCenter size={"100%"} color="red" />,
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
    icon: <BiEdit size={"100%"} color="green" />,
    primary: "Highly",
    secondary: "customizable",
  },
  {
    id: 1,
    icon: <MdAccessTime size={"100%"} color="red" />,
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

export const userItemCategories = [
  {
    id: 0,
    icon: <GrDocumentText size={"100%"} />,
    color: "green",
    primary: "Diaries",
    name: "diary",
  },
  {
    id: 1,
    icon: <IoRestaurantOutline size={"100%"} />,
    color: "red",
    primary: "Meals",
    name: "meal",
  },
  {
    id: 2,
    icon: <IoFastFoodOutline size={"100%"} />,
    color: "yellow",
    primary: "Products",
    name: "product",
  },
];

export const preferences = [
  {
    id: 0,
    icon: <AiOutlineCalculator size={"100%"} />,
    color: "green",
    primary: "BMR",
    name: "bmr",
    google: false,
  },
  {
    id: 1,
    icon: <RiAccountCircleLine size={"100%"} />,
    color: "red",
    primary: "Account",
    name: "userData",
    google: true,
  },
  {
    id: 2,
    icon: <AiOutlinePercentage size={"100%"} />,
    color: "yellow",
    primary: "Demand",
    name: "demandPercentage",
    google: false,
  },
];

export const exampleMeals = [
  {
    id: 0,
    image: salad5,
    primary: "supper",
    secondary: "with chicken",
    description:
      "-grilled chicken breast\n-avocado\n-romaine lettuce\n-grilled pepper\n-onion\n-dressing",
  },
  {
    id: 1,
    image: salad3,
    primary: "breakfast",
    secondary: "with turkey",
    description:
      "-fried turkey breast\n-hard boiled eggs\n-boiled beans\n-boiled red cabbage\n-canned corn\n-fresh vegetables",
  },
  {
    id: 2,
    image: salad2,
    primary: "salad",
    secondary: "Caesar",
    description:
      "-romaine lettuce\n-wheat baguette\n-chicken breast\n-frying oil or olive oil\n-parmesan cheese\n-dressing",
  },
  {
    id: 3,
    image: salad4,
    primary: "something",
    secondary: "vegetarian",
    description:
      "-romaine lettuce\n-carrots fried in soy sauce\n-mozzarella cheese\n-black and green olives\n-walnuts\n-onion",
  },
];

export const tips = [
  {
    id: 0,
    color: "green",
    icon: <BsClock size={"100%"} />,
    header: "Eat regularly",
    description:
      "You should eat at least 3 basic meals a day (1st breakfast, lunch, dinner), and it is even healthier to include two snacks (2nd breakfast and afternoon tea). Breaks between meals should not exceed 3-4 hours. Regular consumption of meals ensures a constant supply of glucose to the body and protects us from sudden hunger.",
  },
  {
    id: 1,
    color: "red",
    icon: <IoFastFoodOutline size={"100%"} />,
    header: "Eat a variety of meals",
    description:
      "The more varied the diet, the more nutrients, vitamins and minerals will be delivered to the body. No dietary supplement can replace a well-balanced diet. Scientists agree that the benefits of eating fruits and vegetables rich in antioxidant vitamins are much greater than those of supplementing with these vitamins.",
  },
  {
    id: 2,
    color: "yellow",
    icon: <IoWaterOutline size={"100%"} />,
    header: "Drink water",
    description:
      "Water constitutes 65–70% of the adult human body weight. It helps to remove harmful waste products from the body and contributes to the maintenance of a constant body temperature. It transports nutrients to the cells and supports the absorption of nutrients. So remember to drink the water in small portions.",
  },
];

export const steps = [
  {
    id: 0,
    color: "green",
    icon: <AiOutlineCalculator size={"100%"} />,
    header: "Calculate BMR",
    description:
      "Your Basal Metabolic Rate is the number of calories you burn as your body performs basic life-sustaining functions.",
  },
  {
    id: 1,
    color: "red",
    icon: <IoMdCreate size={"100%"} />,
    header: "Create your diet",
    description:
      "A diet diary is the easiest and fastest way to keep track of your diet. Thanks to this, we are able to notice mistakes and avoid them in the future.",
  },
  {
    id: 2,
    color: "yellow",
    icon: <GiWeightLiftingUp size={"100%"} />,
    header: "Train regularly",
    description:
      "Regular exercise increases muscle strength and endurance, and improves condition. Regular physical activity will help you fall asleep faster and improve the quality of your sleep.",
  },
  {
    id: 3,
    color: "yellow",
    icon: <GiProgression size={"100%"} />,
    header: "Track progress",
    description:
      "Weighing yourself regularly is the simplest form of dietary monitoring available. Thanks to this, you know if everything is going as planned or if some changes should be made.",
  },
];

export const diaryBuilderSteps = [
  {
    id: 0,
    color: "green",
    icon: <BiSearchAlt size={"100%"} />,
    header: "Use the product finder",
    description:
      "Start typing the name of the selected product and the matching results will appear in the list.",
  },
  {
    id: 1,
    color: "red",
    icon: <BiLike size={"100%"} />,
    header: "Choose the product you like",
    description: "The product database is constantly expanded with new items.",
  },
  {
    id: 2,
    color: "yellow",
    icon: <RiNumbersLine size={"100%"} />,
    header: "Enter quantity of the product",
    description: "The amount of a given product is counted in grams.",
  },
  {
    id: 3,
    color: "green",
    icon: <IoRestaurantOutline size={"100%"} />,
    header: "Build a meal from selected products",
    description:
      "You can build meals from selected products and then add them to your diary.",
  },
];

export const diaryPlaceholders = [
  {
    _id: -1,
    createdAt: null,
    title: "Add New Diary",
    demand: "",
    meals: [],
    nutrients: "",
    demandCoverage: { kcal: { completed: "" } },
  },
  {
    _id: -2,
    createdAt: null,
    title: "Add New Diary",
    demand: "",
    meals: [],
    nutrients: "",
    demandCoverage: { kcal: { completed: "" } },
  },
  {
    _id: -3,
    createdAt: null,
    title: "Add New Diary",
    demand: "",
    meals: [],
    nutrients: "",
    demandCoverage: { kcal: { completed: "" } },
  },
];

export const mealPlaceholders = [
  {
    _id: -1,
    createdAt: null,
    title: "Add New Meal",
    products: [],
    nutrients: "",
  },
  {
    _id: -2,
    createdAt: null,
    title: "Add New Meal",
    products: [],
    nutrients: "",
  },
  {
    _id: -3,
    createdAt: null,
    title: "Add New Meal",
    products: [],
    nutrients: "",
  },
];
export const productPlaceholders = [
  {
    _id: -11,
    createdAt: "",
    title: "Add New Product",
    category: "",
    nutrients: { kcal: "", protein: "", carbs: "", fat: "" },
    amount: "",
  },
  {
    _id: -12,
    createdAt: "",
    title: "Add New Product",
    category: "",
    nutrients: { kcal: "", protein: "", carbs: "", fat: "" },
    amount: "",
  },
  {
    _id: -13,
    createdAt: "",
    title: "Add New Product",
    category: "",
    nutrients: { kcal: "", protein: "", carbs: "", fat: "" },
    amount: "",
  },
];

export const benefits = [
  {
    id: 1,
    name: "Easy to use",
  },
  {
    id: 2,
    name: "Accessible",
  },
  {
    id: 3,
    name: "Customizable",
  },
  {
    id: 4,
    name: "Free",
  },
];

export const tipsAndTricksArticles = [
  {
    id: 0,
    image: pizza_article,
    title: "Pizza doesn't have to be unhealthy",
    description:
      "In a home-made, healthy and nutritious pizza, vegetables should prevail. The more so that according to the latest dietary recommendations, they should constitute nearly ¾ of the food consumed during the day. Therefore, the only limitation in the amount of vegetables is the size of the dough or pizza crust.",
  },
  {
    id: 1,
    image: nuts_article,
    title: "How to neutralize phytic acid in cereals and nuts?",
    description:
      "Phytic acid is a natural component of cereal grains, nuts and legumes. It is essential in the process of plant growth, but for humans it is an anti-nutrient substance, as it inhibits the absorption of minerals from food into the bloodstream. Which products contain the most phytic acid and how to neutralize it?",
  },
  {
    id: 2,
    image: yerba_article,
    title: "Yerba mate and its slimming properties",
    description:
      "Yerba mate is a drink that positively affects almost everything. However, not everyone is aware of the powerful impact it can have on slimming. Yerba supports slimming mainly by feeling full, and also by inhibiting the activity of the digestive enzyme (pancreatic lipase).",
  },
];
