import React from "react";
import Container from "../../templates/Container/Container";
import Gallery from "../../organisms/Gallery/Gallery";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import ArticleCard from "../../molecules/ArticleCard/ArticleCard";
import { tipsAndTricksArticles } from "../../../data/constants";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import { useSelector } from "react-redux";

const Articles = () => {
  const { currentUser } = useSelector((state) => state.user.authData);

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
            <LinkItem
              add
              color={"white"}
              padding={"0.8rem"}
              margin={"0.5rem 0"}
              radius={"10px 0"}
              to={currentUser ? "/profile" : "/auth"}
              children={"Get started"}
              size={"1rem"}
            />
          </>
        }
      />
    </Container>
  );
};

export default Articles;
