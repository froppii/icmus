import { useEffect, useState } from 'react';
import { tracks } from './mock/tracks';
import type { Track } from './types'
import './App.css';

function App() {
  const [current, setCurrent] = useState<Track | null>(null);

  return (
    <div>
      {tracks.map(track => (
        <button key={track.id} onClick={() => setCurrent(track)}>
          {track.title} - {track.artist}
        </button>
      ))}

      {current && (
        <audio controls src={current.src} autoPlay />
      )}
    </div>
  );
}

export default App;
