import React, { useState } from 'react';
import axios from 'axios';

const PlaylistForm = () => {
  const [name, setName] = useState('');
  const [videos, setVideos] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/playlists', { name, videos });
      alert('Playlist created!');
    } catch (error) {
      console.error('Error creating playlist:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
      <input
        type="text"
        placeholder="Playlist Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <textarea
        placeholder="Video URLs (comma-separated)"
        value={videos.join(',')}
        onChange={(e) => setVideos(e.target.value.split(','))}
        className="mb-2 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Playlist
      </button>
    </form>
  );
};

export default PlaylistForm;
