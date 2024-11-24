import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlaylist } from '../redux/slices/playlistSlice';

const PlaylistForm = () => {
  const [name, setName] = useState('');
  const [videos, setVideos] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createPlaylist({ name, videos: videos.split(',') }));
    setName('');
    setVideos('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Playlist Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Videos (comma-separated)"
        value={videos}
        onChange={(e) => setVideos(e.target.value)}
      />
      <button type="submit">Create Playlist</button>
    </form>
  );
};

export default PlaylistForm;
