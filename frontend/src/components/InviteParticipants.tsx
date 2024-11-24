import React, { useState } from 'react';
import axios from 'axios';

const InviteParticipants = ({ playlistId }: { playlistId: string }) => {
  const [participantIds, setParticipantIds] = useState<string[]>(['']);

  const handleAddParticipant = () => setParticipantIds([...participantIds, '']);
  const handleRemoveParticipant = (index: number) =>
    setParticipantIds(participantIds.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3000/playlists/${playlistId}/invite`,
        { participantIds },
      );
      console.log('Participants invited:', response.data);
    } catch (error) {
      console.error('Error inviting participants:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Invite Participants</h2>
      {participantIds.map((id, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Participant ID"
            value={id}
            onChange={(e) =>
              setParticipantIds(
                participantIds.map((p, i) => (i === index ? e.target.value : p)),
              )
            }
            required
          />
          <button type="button" onClick={() => handleRemoveParticipant(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddParticipant}>
        Add Participant
      </button>
      <button type="submit">Send Invitations</button>
    </form>
  );
};

export default InviteParticipants;
