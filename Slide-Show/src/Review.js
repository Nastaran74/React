import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "./data";

function Review() {
  const [index, setIndex] = useState(0);
  const { job, name, image, text } = data[index];
  console.log(index);

  const nextSlide = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevSlide = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
    console.log(randomNumber);
  };
  return (
    <div className="reviews">
      <div className="review-img">
        <img src={image} alt="" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="review-button">
        <button onClick={nextSlide}>
          <FaChevronRight />
        </button>
        <button onClick={prevSlide}>
          <FaChevronLeft />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Next
      </button>
    </div>
  );
}

export default Review;
