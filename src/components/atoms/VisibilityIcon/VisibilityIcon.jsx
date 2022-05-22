import { BiShow, BiHide } from "react-icons/bi";

const VisibilityIcon = ({ condition, toggler }) => {
  return condition ? (
    <BiHide onClick={toggler} />
  ) : (
    <BiShow onClick={toggler} />
  );
};
export default VisibilityIcon;
