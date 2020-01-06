// ! function(a) {


//     "use strict";
//     a(document).on("click", "a.page-scroll", function(e) {
//         var l = a(this);
//         a("html, body").stop().animate({ scrollTop: a(l.attr("href")).offset().top - 50 }, 1250, "easeInOutExpo"), e.preventDefault()
//     }), a("body").scrollspy({ target: ".navbar-fixed-top", offset: 51 }), a(".navbar-collapse ul li a").click(function() { a(".navbar-toggle:visible").click() }), a("#mainNav").affix({ offset: { top: 100 } }), window.sr = ScrollReveal(), sr.reveal(".sr-icons", { duration: 600, scale: .3, distance: "0px" }, 200), sr.reveal(".sr-button", { duration: 1e3, delay: 200 }), sr.reveal(".sr-contact", { duration: 600, scale: .3, distance: "0px" }, 300), a(".popup-gallery").magnificPopup({ delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] }, image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.' } })
// }(jQuery);

// 上面這一段只要一載入底下的所有內容都沒有被執行

console.log("calculate")

$('#button1').on('click', function() {

    console.log("button1")

    var v1 = $('#v1').val()
    console.log("v1 = " + v1)

    var v2 = $('#v2').val()
    var m1 = $('#m1').val()
    var m2 = $('#m2').val()

    v1 = Number(v1)

    v2 = Number(v2)
    console.log("v2 = " + v2)

    m1 = Number(m1)
    console.log("m1 = " + m1)

    m2 = Number(m2)
    console.log("m2 = " + m2)

    A = ((m1 - m2) / (m1 + m2)) * v1 + (2 * m2 / (m1 + m2)) * v2
    $('#result').val(A)
})

$('button2').on('click', function() {
    var v1 = $('#v1').val()
    var v2 = $('#v2').val()
    var m1 = $('#m1').val()
    var m2 = $('#m2').val()
    v1 = Number(v1)
    v2 = Number(v2)
    m1 = Number(m1)
    m2 = Number(m2)
    A = (2 * (m1) / (m1 + m2)) * v1 + ((m2 - m1) / (m1 + m2)) * v2
    $('#result').val(A)
})

$('button20').on('click', function() {
    var M = $('#M').val()
    var S = $('#S').val()
    var T1 = $('#T1').val()
    var T2 = $('#T2').val()
    M = Number(M)
    S = Number(S)
    T1 = Number(T1)
    T2 = Number(T2)
    H = M * S * Math.abs(T1 - T2)
    $('#result2').val(H)
})