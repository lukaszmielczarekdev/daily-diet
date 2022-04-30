import React from "react";
import Container from "../../templates/Container/Container";
import Article from "../../organisms/Article/Article";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";

import ProductDetails from "../../molecules/ProductDetails/ProductDetails";
import salad2 from "../../../assets/Images/salad2.png";
import salad3 from "../../../assets/Images/salad3.png";

const Preferences = () => {
  return (
    <Container text={"center"} fillColor>
      <Article
        padding={"1rem 2rem"}
        left={
          <ControlPanel nowrap>
            <ProductDetails
              image={salad2}
              primary={"Healthy"}
              secondary={"Pizza"}
              description={
                "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdf"
              }
            />
            <ProductDetails
              image={salad3}
              primary={"Healthy"}
              secondary={"Pizza"}
              description={
                "jbhgj bhv bjhvhg vfdcfg hbgcfg hvhgc hghf d fgvfcd d rdf"
              }
            />
          </ControlPanel>
        }
        right={"right"}
      />
    </Container>
  );
};

export default Preferences;
