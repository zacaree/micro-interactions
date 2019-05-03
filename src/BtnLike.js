import React, { useState } from 'react';
import heart from './images/heart.svg';

const BtnLike = () => {
  const [likeCount, setLikeCount] = useState(255);

  return (
    <button onClick={() => setLikeCount(likeCount + 1)}>
      <img src={heart} className="App-logo" alt="logo" />
      <span>{likeCount}</span>
    </button>
  );
};

export default BtnLike;
