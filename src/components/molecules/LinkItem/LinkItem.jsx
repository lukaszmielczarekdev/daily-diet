import { NavLinkItem, NavigationLink } from "./LinkItemStyles";

const LinkItem = (props) => {
  return (
    <NavLinkItem margin={props.margin} left={props.left}>
      <NavigationLink {...props}>{props.children}</NavigationLink>
    </NavLinkItem>
  );
};
export default LinkItem;
