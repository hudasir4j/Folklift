// Card.jsx
import React, { useState } from "react";
import "./Blog.css";
import { articles } from "../../assets/data/data";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import Slider from "react-slick";
import ArticleCard from "../blog/ArticleCard"; // Adjust the path based on your project structure

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <BsFillArrowRightCircleFill className='icon' />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <BsFillArrowLeftCircleFill className='icon' />
      </button>
    </div>
  )
}

const Card = () => {
  const [copiedStates, setCopiedStates] = useState(Array(articles.length).fill(false));

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
  const uniqueCategories = [...new Set(articles.flatMap((article) => article.categories))];

  // Slick slider settings
  const getSliderSettings = (numItems) => {
    return{
      infinite: numItems > 3, // Disable infinite scrolling if less than 3 items
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 4000
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
        },
      },
    ],
  };
};

  return (
    <>
      <section className="blog">
        <div className="container">
          {/* Render sliders for each category */}
          {uniqueCategories.map((category) => {
            const uniqueArticlesForCategory = [];

            return (
              <div key={category} className="category-slider">
                <h2>{category}</h2>
                <hr/>
                <Slider {...getSliderSettings}>
                  {articles
                    .filter((article) => article.categories.includes(category))
                    .map((item) => {
                      // Check if this article is already rendered in another category
                      if (!uniqueArticlesForCategory.some((a) => a.id === item.id)) {
                        uniqueArticlesForCategory.push(item);

                        return (
                        <ArticleCard
                            key={item.id}
                            article={item}
                            isCopied={copiedStates[uniqueArticlesForCategory.length - 1]}
                            onCopy={() => handleClick(uniqueArticlesForCategory.length - 1)}
                          />
                        );
                      }
                      return null; // Skip rendering if article ID is already in the set
                    })}
                </Slider>
                <hr/>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Card;
