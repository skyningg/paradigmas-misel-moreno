$(document).ready(function () {
    const apiKey = 'dd76c530df4b95f311a6ef96e42c089e';
    const apiUrl = 'https://api.themoviedb.org/3/movie/';
    let currentEndpoint = 'popular';

    function handleRequest(endpoint) {
        currentEndpoint = endpoint;
        fetchMovies();
    }

    function fetchMovies() {
        $.ajax({
            url: apiUrl + currentEndpoint,
            type: 'GET',
            data: { api_key: apiKey },
            success: function (data) {
                displayMovies(data.results);
            },
            error: function (xhr, status, error) {
                console.log('Error fetching movies:');
                console.log('Status:', status);
                console.log('Error:', error);
                console.log('Response:', xhr.responseText);
            }
        });
    }

    function displayMovies(movies) {
        const moviesContainer = $('#movies-container');
        moviesContainer.empty();

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

    $('#allMovies').on('click', function (e) {
        e.preventDefault();
        handleRequest('now_playing');
    });

    $('#popularMovies').on('click', function (e) {
        e.preventDefault();
        handleRequest('popular');
    });

    $('#fetchMovies').on('click', function (e) {
        e.preventDefault();
        handleRequest('top_rated');
    });

    $('#cdnMovies').on('click', function (e) {
        e.preventDefault();
    });

    fetchMovies();
});


