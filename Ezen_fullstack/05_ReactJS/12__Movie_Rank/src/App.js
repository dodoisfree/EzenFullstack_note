import React, { memo } from 'react';
import MovieRank from './pages/MovieRank';

const App = memo(() => {
  return (
    <div>
      <h1>13_Movie_Rank</h1>
      <hr />
      <MovieRank />
    </div>
  );
});

export default App;