import {
  NavLinkItem,
  NavigationLink,
  NavigationHashLink,
} from "./LinkItemStyles";

const LinkItem = (props) => {
  return (
    <NavLinkItem margin={props.margin} left={props.left}>
      {props.hash ? (
        <NavigationHashLink smooth {...props}>
          {props.children}
        </NavigationHashLink>
      ) : (
        <NavigationLink {...props}>{props.children}</NavigationLink>
      )}
    </NavLinkItem>
  );
};
export default LinkItem;
