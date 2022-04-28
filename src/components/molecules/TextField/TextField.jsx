import Description from "../../atoms/Description/Description";
import Title from "../../atoms/Title/Title";

const TextField = ({ titlePrimary, titleSecondary, description }) => {
  return (
    <>
      <Title titlePrimary={titlePrimary} titleSecondary={titleSecondary} />
      <Description>{description}</Description>
    </>
  );
};

export default TextField;
