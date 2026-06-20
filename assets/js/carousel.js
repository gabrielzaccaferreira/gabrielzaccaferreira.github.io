document.querySelectorAll("[data-carousel-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-carousel-target");
    const direction = Number(button.getAttribute("data-carousel-direction")) || 1;
    const carousel = document.getElementById(targetId);

    if (!carousel) return;

    const scrollAmount = Math.max(300, carousel.clientWidth * 0.85);

    carousel.scrollBy({
      left: scrollAmount * direction,
      behavior: "smooth"
    });
  });
});

document.querySelectorAll('[data-carousel-dots="true"]').forEach((carousel) => {
  const items = Array.from(carousel.children);

  if (items.length <= 1) return;

  const dots = document.createElement("div");
  dots.className = "carousel-dots";
  dots.setAttribute("aria-label", "Indicadores do carrossel");

  items.forEach((item, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = index === 0 ? "carousel-dot is-active" : "carousel-dot";
    dot.setAttribute("aria-label", `Ir para o item ${index + 1}`);

    dot.addEventListener("click", () => {
      carousel.scrollTo({
        left: item.offsetLeft - carousel.offsetLeft,
        behavior: "smooth"
      });
    });

    dots.appendChild(dot);
  });

  carousel.insertAdjacentElement("afterend", dots);

  const updateDots = () => {
    const currentIndex = items.reduce((closestIndex, item, index) => {
      const currentDistance = Math.abs(carousel.scrollLeft - (item.offsetLeft - carousel.offsetLeft));
      const closestDistance = Math.abs(carousel.scrollLeft - (items[closestIndex].offsetLeft - carousel.offsetLeft));

      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);

    dots.querySelectorAll(".carousel-dot").forEach((dot, index) => {
      dot.classList.toggle("is-active", index === currentIndex);
    });
  };

  carousel.addEventListener("scroll", updateDots, { passive: true });
  window.addEventListener("resize", updateDots);
  updateDots();
});
