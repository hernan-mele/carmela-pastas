const pastasList = document.querySelector('#pasta-combo')
const rellenosList = document.querySelector('#rellenas')
const simplesList = document.querySelector('#simples-list')
const salsasList = document.querySelector('#salsas-list')
const whatsappLink = document.querySelector('#whatsapp')
const menu = document.querySelector('.header__nav-list')
const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false

const pastasObject = {
    'ñoquis': 'ñoquis',
    'tallarines': 'tallarines',
    'raviolones': 'raviolones',
    'sorrentinos': 'sorrentinos',
    'cappellettis': 'cappellettis'
}

const saboresObject = {
    simple: {
        'papa': 'papa',
        'espinaca': 'espinaca',
        'remolacha': 'remolacha',
        'calabaza': 'calabaza'
    },
    rellenos: {
        'capresse': 'capresse',
        'ricotta y nuez': 'ricotta y nuez',
        'jamon y queso': 'jamon y queso',
        'pollo y puerro': 'pollo y puerro',
        'zanahoria y nuez': 'zanahoria y nuez',
        'jamon y roquefort': 'jamon y roquefort',
        'jamon crudo y rucula': 'jamon crudo y rucula',
        'verduras caramelizadas': 'verduras caramelizadas'
    }
}

const salsas = {
    'rosa': 'rosa',
    'tuco': 'tuco',
    'fileto': 'fileto',
    'blanca': 'blanca',
    'bolognesa': 'bolognesa'
}

pastasList.addEventListener('change', () => {

    simplesList.addEventListener('change', () => {
        salsasList.addEventListener('change', () => {
            whatsappLink.setAttribute('href', `https://wa.me/5491163680269?text=${whatsapp(pastasObject[pastasList.value], saboresObject.simple[simplesList.value], salsas[salsasList.value])}`)
        })
    })

    rellenosList.addEventListener('change', () => {
        salsasList.addEventListener('change', () => {
            whatsappLink.setAttribute('href', `https://wa.me/5491163680269?text=${whatsapp(pastasObject[pastasList.value], saboresObject.rellenos[rellenosList.value], salsas[salsasList.value])}`)
        })
    })
})


const whatsapp = (pasta, sabor, salsa) => {
    let url = `Buenos dias, queria hacer un pedido de ${pasta} de ${sabor} y con salsa ${salsa}. Me dirias el precio por favor? Gracias`
    return url = encodeURIComponent(url)
}

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open')
        menu.classList.add('open')
        menuOpen = true
    }else{
        menuBtn.classList.remove('open')
        menu.classList.remove('open')
        menuOpen = false
    }
})