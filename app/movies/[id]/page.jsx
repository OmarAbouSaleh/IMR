"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function MovieDetails({ params }) {
  const router = useRouter();
  const { id } = params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "cf04aa69554fe6ed2d96144707e32461";

  useEffect(() => {
    if (!id) return; // Don't try to fetch data until we have the ID

    async function fetchMovieDetails() {
      setLoading(true);
      const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
      const response = await fetch(detailsUrl);
      const data = await response.json();

      // Optionally, fetch additional movie data like cast here
      console.log(data);
      setMovie(data);
      setLoading(false);
    }

    fetchMovieDetails();
  }, [id]);

  if (loading || !movie) {
    return <div>Loading...</div>;
  }

  return (
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="md:flex md:items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <Image
            class="rounded-l-lg md:w-1/3"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Poster of ${movie.title}`}
            width={500}
            height={1500}
          />
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-800">{movie.title}</h2>
            <p class="mt-2 text-gray-600 text-sm md:text-base">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
