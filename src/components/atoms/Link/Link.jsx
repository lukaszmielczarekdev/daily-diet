import { StyledLink, StyledHashLink } from "./LinkStyles";

const Link = (props) => {
  return props.hash ? (
    <StyledHashLink smooth {...props} />
  ) : (
    <StyledLink {...props} />
  );
};
export default Link;
