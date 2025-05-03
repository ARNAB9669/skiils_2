function dark_theme() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".card-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const holder = button.closest(".card_holder");
      holder.classList.toggle("flip");
    });
  });
});
function Prev() {
  const container = document.querySelector('.card_container');
  container.scrollBy({ left: -300, behavior: 'smooth' });
}

function Next() {
  const container = document.querySelector('.card_container');
  container.scrollBy({ left: 300, behavior: 'smooth' });
}