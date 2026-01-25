document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("#searchInput");

  inputs.forEach((input) => {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const query = this.value.trim();
        if (query.length > 0) {
          window.location.href =
            "https://www.google.com/search?q=" +
            encodeURIComponent(query);
        }
      }
    });
  });
});
