const pastasList = document.querySelector('#pasta-combo')
const rellenos = document.querySelector('#rellenos-list-hidden')
const rellenosList = document.querySelector('#rellenas')
const simples = document.querySelector('#simples-list-hidden')
const simplesList = document.querySelector('#simples-list')
const whatsappLink = document.querySelector('#whatsapp')

let pastasObject = {
    'ñoquis': 'ñoquis',
    'tallarines': 'tallarines',
    'raviolones': 'raviolones',
    'sorrentinos': 'sorrentinos',
    'cappellettis': 'cappellettis'
}

let saboresObject = {
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

pastasList.addEventListener('change', () => {
    whatsappLink.setAttribute('href', `https://wa.me/5491163680269?text=${whatsapp(pastasObject[pastasList.value], "")}`)
    simplesList.addEventListener('change', () => {
        whatsappLink.setAttribute('href', `https://wa.me/5491163680269?text=${whatsapp(pastasObject[pastasList.value], saboresObject.simple[simplesList.value])}`)
    })
    rellenosList.addEventListener('change', () => {
        whatsappLink.setAttribute('href', `https://wa.me/5491163680269?text=${whatsapp(pastasObject[pastasList.value], saboresObject.rellenos[rellenosList.value])}`)
    })
})


const whatsapp = (pasta, sabor) => {
    let url = `Buenos dias, queria hacer un pedido de ${pasta} de ${sabor}. Me dirias el precio por favor? Gracias`
    return url = encodeURIComponent(url)
}

