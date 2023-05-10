let flag = ''
document.getElementById('inc').addEventListener('click', function () {
    document.getElementById('num').innerHTML = flag + 1
    document.getElementById('num').style.color = "green"
    flag++


})
document.getElementById('dec').addEventListener('click', function () {

    document.getElementById('num').innerHTML = flag - 1
    document.getElementById('num').style.color = "red"

    flag--

})
document.getElementById('reset').addEventListener('click', function () {

    flag = 0
    document.getElementById('num').innerHTML = flag
    document.getElementById('num').style.color = " rgb(0, 0, 71) "


})
