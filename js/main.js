document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const links = navbar.getElementsByTagName('a');
  const currentPage = window.location.pathname.split("/").pop();

  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute('href') === currentPage) {
      links[i].classList.add('active');
    }
  }
});
