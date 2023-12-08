import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const images = ['image1.png', 'image2.png', 'image3.png', 'image4.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex]); // Run this effect whenever currentImageIndex changes

  return (
    <>
      <br />
      <h1 className="font-bold text-center text-2xl">Education Details</h1>
      <div className="slideshow-container flex items-center justify-center ">
        <div
          className="slideshow-box flex items-center justify-center"
          style={{ backgroundColor: 'black', width: '80%', height: '50vh', padding: '20px' }}
        >
          <button onClick={goToPreviousSlide} className="slideshow-button">
            &#60;
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />
          <button onClick={goToNextSlide} className="slideshow-button">
            &#62;
          </button>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
