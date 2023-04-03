const dia = document.querySelector('#dias')
const hora = document.querySelector('#horas')
const minuto = document.querySelector('#minutos')
const segundo = document.querySelector('#segundos')
const aniversario = '16 apr 2023'    // so funciona  mês em 3 letras

function countdown(){   
    const transdata = new Date(aniversario)
    const atual = new Date()

    const segundostotal = (transdata - atual)/1000

    const em_dias = Math.floor(segundostotal /60 /60 /24)
    const em_horas = Math.floor(segundostotal /60 /60) % 24
    const em_minutos = Math.floor(segundostotal /60) % 60
    const em_segundos = Math.floor(segundostotal) % 60

    dia.innerHTML = formatotime(em_dias)
    hora.innerHTML = formatotime(em_horas) 
    minuto.innerHTML = formatotime(em_minutos)
    segundo.innerHTML = formatotime(em_segundos)
}

function formatotime(time){ // para acrecentar (0) 
    return time < 10? `0 ${time}`: time 

}

countdown()
setInterval(countdown,1000) // funçao atualizar tela (setInterval)= mostrar na tela em segundos (um segundo = 1000)
