import React, { useState } from "react";
import {
  Wrapper,
  Container,
  StyledInput,
  StyledLabel,
  StyledSpan,
} from "./RatingStyles";
import { MdStarOutline, MdStarHalf, MdStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { rateDiary } from "../../../store/diaries";

const Rating = ({ readOnly, padding, average, rates, diaryID, width }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  rates = rates ? rates : null;
  average = average ? average : 0;

  const renderStars = (average) => {
    const starsToRender = [];
    const totalStars = 5;
    const floor = Math.floor(average);

    if (average === 0) {
      [...Array(totalStars)].forEach(() =>
        starsToRender.push(<MdStarOutline size={"80%"} color="orange" />)
      );
    } else if (average === 0.5) {
      starsToRender.push(<MdStarHalf size={"80%"} color="orange" />);
      [...Array(totalStars - 1)].forEach(() =>
        starsToRender.push(<MdStarOutline size={"80%"} color="orange" />)
      );
    } else {
      if (floor) {
        [...Array(floor)].forEach(() =>
          starsToRender.push(<MdStar size={"80%"} color="orange" />)
        );

        const modulo = average % floor;

        if (modulo)
          starsToRender.push(<MdStarHalf size={"80%"} color="orange" />);

        const rest = totalStars - starsToRender.length;

        if (rest >= 1) {
          [...Array(rest)].forEach(() =>
            starsToRender.push(<MdStarOutline size={"80%"} color="orange" />)
          );
        }
      }
    }

    return starsToRender.map((elem, index) => (
      <StyledLabel readOnly={readOnly} key={index}>
        {elem}
      </StyledLabel>
    ));
  };

  const handleRate = (value) => {
    setRating(value);
    dispatch(rateDiary({ id: diaryID, rate: value }));
  };
  return (
    <Wrapper padding={padding}>
      {readOnly ? (
        <Container width={width}>
          {renderStars(average)}{" "}
          <StyledSpan>{rates && `(${rates})`}</StyledSpan>
        </Container>
      ) : (
        <Container width={width} onMouseLeave={() => setHover(null)}>
          {[...Array(5)].map((elem, index) => {
            const ratingValue = index + 1;
            return (
              <StyledLabel readOnly={readOnly} key={index}>
                <StyledInput
                  type={"radio"}
                  name={"rating"}
                  value={ratingValue}
                  onClick={() => handleRate(ratingValue)}
                />
                {ratingValue <= (rating || hover) ? (
                  <MdStar
                    onMouseEnter={() => setHover(ratingValue)}
                    size={"80%"}
                    color={"orange"}
                  />
                ) : (
                  <MdStarOutline
                    onMouseEnter={() => setHover(ratingValue)}
                    size={"80%"}
                    color={"orange"}
                  />
                )}
              </StyledLabel>
            );
          })}
          <StyledSpan>{rates && `(${rates})`}</StyledSpan>
        </Container>
      )}
    </Wrapper>
  );
};

export default Rating;
