document.addEventListener("DOMContentLoaded", () => {
    const movies = [
        { title: "She Rides Shotgun", year: "2024", image: "images/movie1.png" },
        { title: "The Legendary Man", year: "2023", image: "images/movie2.png" },
        { title: "Marshall", year: "2021", image: "images/movie3.png" },
        { title: "She Shot", year: "2024", image: "images/movie4.png" },
        { title: "Raincoat", year: "2023", image: "images/movie5.png" },
        { title: "Pickup", year: "2022", image: "images/movie6.png" },
        { title: "Golden Guard", year: "2023", image: "images/movie7.png" },
        { title: "Adventure Time", year: "2022", image: "images/movie8.png" }
    ];

    const moviesGrid = document.getElementById("moviesGrid");

    function renderMovies(list) {
        moviesGrid.innerHTML = "";
        list.forEach(movie => {
            const card = document.createElement("div");
            card.classList.add("movie-card");
            card.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <div class="movie-info">
                    <h5>${movie.title}</h5>
                    <p>${movie.year}</p>
                </div>
            `;
            moviesGrid.appendChild(card);
        });
    }

    renderMovies(movies);

    // Поиск
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    function searchMovies() {
        const query = searchInput.value.toLowerCase();
        const filtered = movies.filter(m =>
            m.title.toLowerCase().includes(query) || m.year.includes(query)
        );
        renderMovies(filtered);
    }

    searchBtn.addEventListener("click", searchMovies);
    searchInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") searchMovies();
    });
});
