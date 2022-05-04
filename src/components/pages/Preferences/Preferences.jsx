import React from "react";
import Container from "../../templates/Container/Container";
import Article from "../../organisms/Article/Article";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import ProductDetails from "../../molecules/ProductDetails/ProductDetails";
import salad2 from "../../../assets/Images/salad2.png";
import salad5 from "../../../assets/Images/salad5.png";

const Preferences = () => {
  return (
    <Container fillColor>
      <Article left={"LEFT"} right={"RIGHT"} />
      <ControlPanel>
        <ProductDetails
          image={salad2}
          primary={"Healthy"}
          secondary={"Pizza"}
          description={
            "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdf"
          }
        />
        <ProductDetails
          image={salad5}
          primary={"Healthy"}
          secondary={"Pizza"}
          description={
            "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdf"
          }
        />
        <ProductDetails
          image={salad5}
          primary={"Healthy"}
          secondary={"Pizza"}
          description={
            "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdf"
          }
        />
        <ProductDetails
          image={salad5}
          primary={"Healthy"}
          secondary={"Pizza"}
          description={
            "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdf"
          }
        />
      </ControlPanel>
    </Container>
  );
};

export default Preferences;
