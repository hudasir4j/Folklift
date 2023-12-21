import React from "react"
import "./Category.css"
import { category } from "../../assets/data/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

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

 const Category = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 2,
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
        ],
      }

  return (

        <section className='category'>
            <div className="content">
                <Slider {...settings}>
                    {category.map((item) => (
                    <div className='boxs' key={item.id}>
                        <div className='box' >
                          <img src={item.cover} alt={item.category} />
                          <div className='overlay'>
                            <h4>{item.category}</h4>
                            <p>{item.title}</p>
                          </div>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </section>
  )
}

export default Category