import React, { useState } from 'react';
import './TextCarousel.css';

const TextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisibleItems = () => {
    const visibleIndexes = [
      (currentIndex + items.length - 1) % items.length,
      currentIndex,
      (currentIndex + 1) % items.length,
    ];

    return visibleIndexes.map((index) => ({
      index,
      item: items[index],
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="carousel">
        <button className="arrow left" onClick={handlePrev}>
          &lt;
        </button>
        <div className="items-container" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {getVisibleItems().map(({ index, item }) => (
            <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
              {item}
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TextCarousel;
