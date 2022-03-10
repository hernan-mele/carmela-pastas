const pastasList = document.querySelector('#pasta-combo')
const rellenos = document.querySelector('#rellenos-list-hidden')
const simples = document.querySelector('#simples-list-hidden')

pastasList.addEventListener('change', () => {
    if(pastasList.value == 0 || pastasList.value == 1){
        simples.style.display = "block"
    }else{
        simples.style.display = "none"
        rellenos.style.display = "block"
    }
})