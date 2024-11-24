import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Playlist Sync</h1>
      <Link to="/playlists">
        <button>Go to Playlists</button>
      </Link>
    </div>
  );
};

export default Home;
