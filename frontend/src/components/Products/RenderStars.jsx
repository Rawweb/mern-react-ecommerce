import React from 'react';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

const renderStars = rating => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<IoMdStar key={`full-${i}`} className="size-5 text-black" />);
  }

  if (hasHalfStar) {
    stars.push(<IoMdStarHalf key="half" className="size-5 text-black" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <IoMdStarOutline key={`empty-${i}`} className="size-5 text-black" />
    );
  }

  return stars;
};

export default renderStars;
