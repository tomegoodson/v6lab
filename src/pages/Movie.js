import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Fetch error:', error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <header>
        <NavBar />
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time} minutes</p>
        {movie.genres.map(genre => (
          <span key={genre}>{genre} </span>
        ))}
      </main>
    </>
  );
}

export default Movie;
