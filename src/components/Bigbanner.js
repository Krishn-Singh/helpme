import React, { useState } from 'react'

const Bigbanner = () => {
    const images = [
        'https://www.pexels.com/photo/black-and-white-hardtail-bike-on-brown-road-between-trees-100582/',
        'https://www.pexels.com/photo/man-riding-a-mountain-bike-in-the-forest-12777886/',
        'https://via.placeholder.com/800x300/0000FF/FFFFFF',
      ];

    const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="relative w-full">
    <div className="overflow-hidden w-full">
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-80 md:h-96 bg-cover bg-center transition-transform duration-500 ease-in-out ${
              index === currentImage ? 'transform translate-x-0' : 'transform translate-x-full'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
    <button
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
      onClick={prevSlide}
    >
      Prev
    </button>
    <button
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
      onClick={nextSlide}
    >
      Next
    </button>
  </div>
);
};
  
export default Bigbanner