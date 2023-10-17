let container = document.querySelector(".container");

function scrollHorizontally(e) {
  e = window.event || e;
  const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  container.scrollLeft += delta * -100;
  e.preventDefault();
}
