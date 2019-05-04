import React from 'react';
import BtnLike from './BtnLike';

// data represents data fetched from a database
const data = {
  user: {
    name: 'Zac Remboldt',
    likedPosts: [13482, 12348, 21233, 48347],
    social: {
      website: 'https://www.zacremboldt.com/',
      github: '@zacaree',
      codepen: '@zacaree',
      twitter: '@zremboldt'
    }
  }
};

function App() {
  return (
    <div className="App">
      <BtnLike user={data.user} postData={{ postId: 12348, totalLikes: 256 }} />
      <BtnLike user={data.user} postData={{ postId: 12349, totalLikes: 511 }} />
      <BtnLike user={data.user} postData={{ postId: 12345, totalLikes: 1023 }} />
    </div>
  );
}

export default App;
