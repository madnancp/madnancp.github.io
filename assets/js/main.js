(function () {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });
})();

/**
 * Load project images with gradient overlay
 */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".project-image").forEach((div) => {
    const imgSrc = div.dataset.imageSrc;
    if (imgSrc) {
      div.style.background = `
        linear-gradient(to bottom, rgba(10,10,10,0.3), rgba(10,10,10,0.7)),
        url('${imgSrc}')
      `;
      div.style.backgroundSize = "cover";
      div.style.backgroundPosition = "center";
      div.style.backgroundRepeat = "no-repeat";
    }
  });
});
