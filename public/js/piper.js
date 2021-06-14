/*  this is based on Piper Haywoods's formula: https://piperhaywood.com/images-consistent-surface-area/ */

(function () {
  "use strict";

  window.onload = function () {
    var images = document.querySelectorAll(".logos .logo");

    function max_img_width(image) {
      var ideal_area = 5000;
      var ideal_ratio = Math.sqrt(
        ideal_area / (image.naturalWidth * image.naturalHeight)
      );

      image.width = Math.round(image.naturalWidth * ideal_ratio);
      image.classList.remove("hidden");
    }

    images.forEach(max_img_width);
  };
})();
