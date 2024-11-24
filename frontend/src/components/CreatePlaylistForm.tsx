import React, { useState } from 'react';
import axios from 'axios';

const CreatePlaylistForm = () => {
  const [name, setName] = useState('');
  const [videos, setVideos] = useState(['']);
  const [ownerId, setOwnerId] = useState(''); // Replace with actual user ID logic

  const handleAddVideo = () => setVideos([...videos, '']);
  const handleRemoveVideo = (index: number) =>
    setVideos(videos.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/playlists', {
        name,
        videos,
        ownerId,
      });
      console.log('Playlist created:', response.data);
    } catch (error) {
      console.error('Error creating playlist:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Playlist</h2>
      <input
        type="text"
        placeholder="Playlist Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {videos.map((video, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Video URL"
            value={video}
            onChange={(e) =>
              setVideos(videos.map((v, i) => (i === index ? e.target.value : v)))
            }
            required
          />
          <button type="button" onClick={() => handleRemoveVideo(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddVideo}>
        Add Video
      </button>
      <button type="submit">Create Playlist</button>
    </form>
  );
};

export default CreatePlaylistForm;
