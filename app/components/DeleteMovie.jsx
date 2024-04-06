//create a delete movie function    

const DeleteMovie = ({ movieId, setMovies }) => {
    const handleDeleteMovie = () => {
        fetch('/api/movies', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ movieId })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setMovies(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    };

    return (
        <button
            onClick={handleDeleteMovie}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
            Delete
        </button>
    );
};

export default DeleteMovie;