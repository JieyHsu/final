$('button1').on('click', function() {
    var v1 = $('#v1').val()
    var v2 = $('#v2').val()
    var m1 = $('#m1').val()
    var m2 = $('#m2').val()
    v1 = Number(v1)
    v2 = Number(v2)
    m1 = Number(m1)
    m2 = Number(m2)
    A = ((m1 - m2) / (m1 + m2)) * v1 + (2(m2) / (m1 + m2)) * v2
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
    A = (2(m1) / (m1 + m2)) * v1 + ((m2 - m1) / (m1 + m2)) * v2
    $('#result').val(A)
})

$('button3').on('click', function() {
    var m = $('#mass').val()
    var r = $('#radius').val()
    var h = $('#height').val()
    m = Number(m)
    h = Number(h)
    r = Number(r)
    Iz = 1 / 2 * m * r * r
    $('#result1').val(Iz)
})




$('button4').on('click', function() {
    var m = $('#mass').val()
    var r = $('#radius').val()
    var h = $('#height').val()
    m = Number(m)
    h = Number(h)
    r = Number(r)
    Ishell = m * r * r
    $('#result1').val(Ishell)
})



$('button5').on('click', function() {
    var m = $('#spheremass').val()
    var r = $('#sphereradius').val()
    m = Number(m)
    r = Number(r)
    Isolid = 2 / 5 * m * r * r
    $('#result2').val(Isolid)
})
$('button6').on('click', function() {
    var m = $('#spheremass').val()
    var r = $('#sphereradius').val()
    m = Number(m)
    r = Number(r)
    Ishallow = 2 / 3 * m * r * r
    $('#result2').val(Ishallow)
})

$('button7').on('click', function() {
    var h = $('#plateheight').val()
    var w = $('#platewidth').val()
    h = Number(h)
    w = Number(w)
    Imiddle = 1 / 12 * m * (h * h + w * w)
    $('#result3').val(Imiddle)
})
$('button8').on('click', function() {
    var h = $('#plateheight').val()
    var w = $('#platewidth').val()
    h = Number(h)
    w = Number(w)
    Iend = 1 / 12 * m * (4 * h * h + w * w)
    $('#result3').val(Iend)
})