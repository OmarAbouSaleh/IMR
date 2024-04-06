'useclient'

import React, { useState } from 'react';

function generateRandomID(min, max) {
    // Ensure the function arguments are integers and min < max
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is inclusive and the minimum is inclusive
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return { "$numberInt": randomNumber.toString() };
}

const AddMovie = () => {
    const [movie_name, setMovieName] = useState('');
    const [cast, setCast] = useState([]);
    const [release_year, setReleaseYear] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddMovie = () => {
        // Perform validation on the input values here
    
        const movieData = {
            movieId: generateRandomID(100000000, 999999999).$numberInt, // Extract the integer value
            movie_name,
            cast: cast.split(','), // Split string into an array
            release_year: parseInt(release_year) // Ensure this is an integer
        };
        console.log(movieData)
        fetch('/api/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
            
            
        })
        .then(response => { // Now correctly chained to the fetch promise
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Here you can clear the form or close the modal
            setIsModalOpen(false); // Example of closing the modal
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    };    

    return (
        <div>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add New Movie
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">

                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Movie</h3>
                            <div className="mt-2 px-7 py-3">
                                <label htmlFor="movie_name" className="block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    className="mb-3 px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Title"
                                    type="text"
                                    value={movie_name}
                                    onChange={e => setMovieName(e.target.value)}
                                />
                                <label htmlFor="cast" className="block text-sm font-medium text-gray-700">
                                    Cast Seperate with comma
                                </label>
                                <input
                                    className="mb-3 px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Cast"
                                    type="text"
                                    value={cast}
                                    onChange={e => setCast(e.target.value)}
                                />
                                <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                                    Year
                                </label>
                                <input
                                    className="mb-3 px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Year"
                                    type="text"
                                    value={release_year}
                                    onChange={e => setReleaseYear(e.target.value)}
                                />
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    id="ok-btn"
                                    onClick={handleAddMovie}
                                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Submit
                                </button>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    id="cancel-btn"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-white text-gray-700 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default AddMovie;
