$(document).ready(function () {
    const apiKey = '96b2b041931c86d8e81d8af32da15914';
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular';

    fetchMovies();

    function fetchMovies() {
        $.ajax({
            url: apiUrl,
            type: 'GET',
            data: { api_key: apiKey },
            success: function (data) {
                displayMovies(data.results);
            },
            error: function (error) {
                console.log('Error fetching movies:', error);
            }
        });
    }

    function displayMovies(movies) {
        const moviesContainer = $('#movies-container');

        movies.forEach(movie => {
            const movieCard = `
                <div class="movie-card">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                        <p>${movie.release_date}</p>
                    </div>
                </div>
            `;
            moviesContainer.append(movieCard);
        });
    }
});
