window.onload = function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: `${
          document.getElementById(this.getAttribute("data-scroll")).offsetTop
        }`,
        behavior: "smooth",
      });
    });
  });
  window.onscroll = function () {
    // Activating header links on scrolling
    document.querySelectorAll("section").forEach(function (e) {
      if (window.scrollY > e.offsetTop - 1) {
        let activatedLink =
          document.querySelector(`a[data-scroll=${e.getAttribute("id")}]`) ||
          document.querySelector("a[data-scroll='getting-started']");
        navLinks.forEach((e) => e.classList.remove("active"));
        activatedLink.classList.add("active");
      }
    });
  };
};
