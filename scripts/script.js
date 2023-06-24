
$('.acil').click(function (e) { 
    // let ac = this.parentElement.children[1]
    // ac.classList.toggle('show')

    /* StackOverFlow
    if($(this).parent().children('.acilmis').css('display') == 'none') {
        $('.acilmis').slideUp(500)
        $(this).parent().children('.acilmis').slideToggle(500)
    }else {
        $('.acilmis').slideUp(500)
    }
    */
   /* Farklı Bi yöntem
    if($(this).parent().children('.acilmis').hasClass('show')) {
        $(this).parent().children('.acilmis').removeClass('show')
    } else {
        $('.acilmis').removeClass('show')
        $(this).parent().children('.acilmis').addClass('show')

    }
    */
    


})

const btn = document.querySelectorAll('.acil')
const acilmis = document.querySelectorAll('.acilmis')
const icon = document.querySelectorAll('.fa-plus')

for(let i of btn) {
    i.addEventListener('click', open)
}

function open() {
    let willOpen = this.parentElement.children[1]

    if(willOpen.classList.contains('show')) {
        willOpen.classList.toggle('show')
        this.children[0].classList.toggle('turn')
    } else {

        acilmis.forEach(e => e.classList.remove('show'))
        icon.forEach(e => e.classList.remove('turn'))
        willOpen.classList.toggle('show')
        this.children[0].classList.toggle('turn')
    }

}