window.onload = function () {
  var blist = document.querySelector(".blist");
  var scrollLeftButton = document.querySelector(".scroll-left");
  var scrollRightButton = document.querySelector(".scroll-right");

  scrollLeftButton.addEventListener("click", function () {
    blist.scrollTo({
      left: blist.scrollLeft - 370,
      behavior: 'smooth'
    });
  });

  scrollRightButton.addEventListener("click", function () {
    blist.scrollTo({
      left: blist.scrollLeft + 370,
      behavior: 'smooth'
    });
  });
};
