import { useEffect, useState } from 'react';
import './App.css';

type Track = {
  id: number;
  title: string;
  artist: string;
  src: string;
}

function App() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [current, setCurrent] = useState<Track | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/tracks")
    .then(res => res.json())
    .then(setTracks);
  }, []);

  return (
    <div>
      <h1>my music</h1>
      {tracks.map(track => (
        <button key={track.id} onClick={() => setCurrent(track)}>
          {track.title} - {track.artist}
        </button>
      ))}

      {current && (
        <audio controls src={current.src} autoPlay />
      )}
    </div>
  )
}

export default App
