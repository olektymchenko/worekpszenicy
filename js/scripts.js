$(window).ready(function () {
    let preloader = $("#preloader");
    setTimeout(function () {
        preloader.remove();
    });

})
$(document).ready(function () {

    let PolLang = $("#PolLanguage");
    let EngLang = $("#EngLanguage");
    let RusLang = $("#RusLanguage");

    let website = document.location.href.split('app/')[0];

    EngLang.click(function () {
        document.location.href = website + "app/en/index.html"
    });
    PolLang.click(function () {
        document.location.href = website + "app/index.html"
    });

    RusLang.click(function () {
        document.location.href = website + "app/ru/index.html"
    })

});