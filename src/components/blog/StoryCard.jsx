import React, { useState } from "react";
import "./Blog.css";
import { texts } from "../../assets/data/data";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import Slider from "react-slick";
import StoryCardSrc from './StoryCardSrc';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <BsFillArrowRightCircleFill className="icon" />
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <BsFillArrowLeftCircleFill className="icon" />
      </button>
    </div>
  );
};

const StoryCard = () => {
  const [copiedStates, setCopiedStates] = useState(Array(texts.length).fill(false));

  const handleClick = (index) => {
    const newCopiedStates = [...copiedStates];
    newCopiedStates[index] = true;
    setCopiedStates(newCopiedStates);

    setTimeout(() => {
      newCopiedStates[index] = false;
      setCopiedStates(newCopiedStates);
    }, 10);
  };

  // Create an array of unique categories
  const uniqueCategories = [...new Set(texts.flatMap((text) => text.categories))];

  // Function to get slider settings based on the number of items
  const getSliderSettings = (numItems) => ({
    infinite: numItems > 3, // Disable infinite scrolling if less than 3 items
    speed: 800,
    slidesToShow: Math.min(numItems, 3), // Show the number of items or 3, whichever is smaller
    slidesToScroll: Math.min(numItems, 2), // Scroll the number of items or 2, whichever is smaller
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: Math.min(numItems, 2), // Show the number of items or 2, whichever is smaller
          slidesToScroll: Math.min(numItems, 2), // Scroll the number of items or 2, whichever is smaller
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(numItems, 1), // Show the number of items or 1, whichever is smaller
          slidesToScroll: Math.min(numItems, 1), // Scroll the number of items or 1, whichever is smaller
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  });

  return (
    <>
      <section className="blog">
        <div className="container">
          {/* Render sliders for each category */}
          {uniqueCategories.map((category) => {
            const uniqueTextsForCategory = [];

            const filteredTexts = texts.filter((text) => text.categories.includes(category));

            return (
              <div key={category} className="category-slider">
                <h2>{category}</h2>
                <hr />
                <Slider {...getSliderSettings(filteredTexts.length)}>
                  {filteredTexts.map((item) => {
                    // Check if this text is already rendered in another category
                    if (!uniqueTextsForCategory.some((a) => a.id === item.id)) {
                      uniqueTextsForCategory.push(item);

                      return (
                        <StoryCardSrc
                          key={item.id}
                          article={item}
                          isCopied={copiedStates[uniqueTextsForCategory.length - 1]}
                          onCopy={() => handleClick(uniqueTextsForCategory.length - 1)}
                        />
                      );
                    }
                    return null; // Skip rendering if text ID is already in the set
                  })}
                </Slider>
                <hr />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default StoryCard;
