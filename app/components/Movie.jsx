'use client'
import React, { useEffect, useState } from 'react';
import AddMovie from './AddMovie';
import DeleteMovie from './DeleteMovie';


const MoviesComponent = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log('Fetching movies...');
        const response = await fetch('/api/movies');
        if (!response.ok) {
            console.log(response)
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setError("Failed to fetch movies. Please try again later.");
      }
    };

    fetchMovies();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center my-12">
        <AddMovie />
        <ul className="space-y-8 mt-8">
          {movies.map(movie => (
            <li key={movie.id} className="bg-white rounded-lg shadow-lg p-6">
              <strong className="text-2xl text-gray-700">{movie.movie_name}</strong>
              <span className="text-xl text-gray-500"> ({movie.release_year})</span>
              <p className="text-gray-600 mt-2">Cast: <span className="text-gray-800 font-medium">{movie.cast.join(', ')}</span></p>
              <DeleteMovie movieId={movie.id} setMovies={setMovies} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesComponent;

