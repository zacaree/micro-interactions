import React from 'react';
import BtnLike from './BtnLike';

// data represents data fetched from a database
const data = {
  user: {
    name: 'Zac Remboldt',
    likedPosts: [13482, 17423, 21233],
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
      <BtnLike user={data.user} postId={12345} />
    </div>
  );
}

export default App;
