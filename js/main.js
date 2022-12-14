// $('.hero__slider-list').slick();
$(".hero__slider-list").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$(".film-list").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
});

let itemBtn = document.querySelectorAll(".header__menu-link");

itemBtn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
});
