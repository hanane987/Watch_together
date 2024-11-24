import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlaylistForm from '../components/PlaylistForm';
import { fetchPlaylists } from '../redux/slices/playlistSlice';

const PlaylistPage = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state: any) => state.playlist.playlists);

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, [dispatch]);

  return (
    <div className="playlist-page">
      <h2>Playlists</h2>
      <PlaylistForm />
      <ul>
        {playlists.map((playlist: any) => (
          <li key={playlist._id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistPage;
