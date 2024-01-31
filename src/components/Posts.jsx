// ImageGallery.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Posts = (images) => {
  


  const val = images.images.length;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-3/4 mx-4 mb-10">

      <Slider {...settings}>
        {[...Array(val)].map((_, index) => (
          <div key={index} className="slide">
            <img
              src={images.images[index]} // Replace with actual image paths
              alt={`Image ${index + 1}`}
              className="w-full h-1/4 rounded-xl shadow-lg p-3"
            />
          </div>
        ))}
      </Slider>
    </div>
    
  );
};

export default Posts;

