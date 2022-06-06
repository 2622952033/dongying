$(function () {
  var swiper = new Swiper(".banner .swiper-container", {
    pagination: ".swiper-pagination",
    paginationClickable: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 30,
    effect: "fade",
    loop: true
  });
});
(function () {
  $("#pingpaicopy_45541").html($("#pingpai_45541").html());
  var MyMar = setInterval(Marquee, 20);
  $("#scroll_45541").hover(
    function () {
      clearInterval(MyMar);
    },
    function () {
      MyMar = setInterval(Marquee, 20);
    }
  );
  function Marquee() {
    var tab = $("#pingpaibox_45541")[0],
      tab1 = $("#pingpai_45541")[0],
      tab2 = $("#pingpaicopy_45541")[0];
    if (tab2.offsetWidth - tab.scrollLeft <= 0)
      tab.scrollLeft -= tab1.offsetWidth;
    else {
      tab.scrollLeft++;
    }
    $("#tab").html(tab.scrollLeft);
    $("#tab1").html(tab1.offsetWidth);
    $("#tab2").html(tab2.offsetWidth);
  }
})();
