import React from "react";
import "./Ratings.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Ratings = ({ rating, reviews }) => {
  const tempRating = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <BsStarFill />
        ) : rating >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className="ratings">
      <div className="rating">{tempRating}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </div>
  );
};

export default Ratings;
