import { NavLinkItem, NavigationLink } from "./LinkItemStyles";

const LinkItem = (props) => {
  return (
    <NavLinkItem margin={props.margin}>
      <NavigationLink {...props}>{props.children}</NavigationLink>
    </NavLinkItem>
  );
};
export default LinkItem;
