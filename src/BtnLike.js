import React, { useState } from 'react';
import Heart from './images/heart.js';

const BtnLike = props => {
  const { postId } = props;
  const { likedPosts } = props.user;

  const [likeCount, setLikeCount] = useState(255);
  const liked = likedPosts.includes(postId) ? true : false;

  const handleClick = () => {
    if (!liked) {
      likedPosts.push(postId); // add this postId to the user's list of likes.
      setLikeCount(likeCount + 1); // add 1 to the total like count.
    } else {
      const i = likedPosts.indexOf(postId); // find the index of this postId.
      likedPosts.splice(i, 1).join(); // remove this postId from the user's list of likes.
      setLikeCount(likeCount - 1); // remove 1 from the total like count.
    }
  };

  return (
    <button onClick={handleClick} className={liked ? 'liked' : ''}>
      <Heart />
      <span>{likeCount}</span>
    </button>
  );
};

export default BtnLike;
