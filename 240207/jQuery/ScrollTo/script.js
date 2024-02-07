$("nav a").click(function (e) {
  $.scrollTo(this.hash, 800);
  e.preventDefoult();
});
