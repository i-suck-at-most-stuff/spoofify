document.addEventListener("DOMContentLoaded", () => {
  const homeButton = document.getElementById("home-button");
  const searchButton = document.getElementById("search-button");
  const libraryButton = document.getElementById("library-button");
  const likedButton = document.getElementById("liked-button");

  const homeButtonSide = document.getElementById("home-button-side");
  const searchButtonSide = document.getElementById("search-button-side");
  const libraryButtonSide = document.getElementById("library-button-side");
  const likedButtonSide = document.getElementById("liked-button-side");

  const homeContent = document.getElementById("home-content");
  const searchContent = document.getElementById("search-content");
  const libraryContent = document.getElementById("library-content");
  const likedContent = document.getElementById("liked-content");

  function hideAllSections() {
    homeContent.style.display = "none";
    searchContent.style.display = "none";
    libraryContent.style.display = "none";
    likedContent.style.display = "none";
  }

  function showSection(section) {
    hideAllSections();
    section.style.display = "block";
  }

  homeButton.addEventListener("click", () => showSection(homeContent));
  searchButton.addEventListener("click", () => showSection(searchContent));
  libraryButton.addEventListener("click", () => showSection(libraryContent));
  likedButton.addEventListener("click", () => showSection(likedContent));

  homeButtonSide.addEventListener("click", () => showSection(homeContent));
  searchButtonSide.addEventListener("click", () => showSection(searchContent));
  libraryButtonSide.addEventListener("click", () =>
    showSection(libraryContent)
  );
  likedButtonSide.addEventListener("click", () => showSection(likedContent));

  showSection(homeContent);

  // Search functionality
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const results = [];

    // Sample data; replace with actual data
    const data = [
      { title: "Russian Idiot", artist: "GЯ∈∈N Dдч" },
      {
        title: "Three Cheers for Sweet Revenge",
        artist: "Andy Graves feat. Leyley",
      },
      { title: "Midnight Meetings", artist: "Linkedin Park" },
      { title: "Blue Road", artist: "Weatles" },
    ];

    data.forEach((item) => {
      if (
        item.title.toLowerCase().includes(query) ||
        item.artist.toLowerCase().includes(query)
      ) {
        results.push(`<div class="search-result">
                                <h3>${item.title}</h3>
                                <p>${item.artist}</p>
                              </div>`);
      }
    });

    searchResults.innerHTML = results.length
      ? results.join("")
      : "<p>No results found</p>";
  });
});
