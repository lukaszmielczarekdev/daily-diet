import React from "react";
import Container from "../../templates/Container/Container";
import Gallery from "../../organisms/Gallery/Gallery";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import ArticleCard from "../../molecules/ArticleCard/ArticleCard";
import { tipsAndTricksArticles } from "../../../data/constants";

const Articles = () => {
  return (
    <Container fillColor>
      <Gallery
        description={
          "There are some useful articles in this section that provide lots of helpful information. This is not only information on building a diet, but also information on the characteristics of individual products, their use, practical tips and many other interesting tips."
        }
        padding={"3rem"}
        titlePrimary={"A handful of information"}
        titleSecondary={"Tips & Tricks"}
        children={
          <>
            <ControlPanel
              justify={"space-between"}
              align={"baseline"}
              margin={"0 0 2rem 0"}
            >
              {tipsAndTricksArticles.map((article) => (
                <ArticleCard {...article} key={article.id} />
              ))}
            </ControlPanel>
          </>
        }
      />
    </Container>
  );
};

export default Articles;
