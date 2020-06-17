$(document).ready(function () {
  let PolLang = $("#PolLanguage");
  let EngLang = $("#EngLanguage");
  let RusLang = $("#RusLanguage");

  let website = document.location.href.split(".pl")[0];

  EngLang.click(function () {
    document.location.href = website + ".pl/en/index.html";
  });
  PolLang.click(function () {
    document.location.href = website + ".pl/index.html";
  });

  RusLang.click(function () {
    document.location.href = website + ".pl/ru/index.html";
  });
  $("#preloader").remove();
});
