let main = document.querySelector('main')
let menu1 = document.getElementById('1')
let menu2 = document.getElementById('2')

function sobreNos(){
    main.innerHTML = `
        <section class="sobre-nos">
            <div class="container__animacao">
                <div class="casal"></div>
            </div>
            <div class="descricao">Esses somos nós, Lucas e Mayara! Não faz muito tempo que nos conhecemos, em torno de 6 meses. Tudo começou por um aplicativo de namoro, o que tornou em poucos meses em um relacionamento sério. O nosso amor vence qualquer barreira. Nosso encontro parece obra do destino. Apoiamos um ao outro, principalmente nos momentos mais difíceis. O nosso amor é para sempre e um dia vamos envelhecer e formar uma linda família. Te amo infinito, amor! </div>
        </section>
    `
}

function NossasCancoes(){
    main.innerHTML = `
        <section class="musicas">
            <iframe width="80%" height="369" src="https://www.youtube.com/embed/WkLpoUiasZ8?list=RDWkLpoUiasZ8" title="Rubel, ANAVITÓRIA - Partilhar [Clipe Oficial]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="80%" height="369" src="https://www.youtube.com/embed/chwyjJbcs1Y" title="Falamansa - Xote dos Milagres" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="80%" height="369" src="https://www.youtube.com/embed/e4Ez99gCOiY" title="Alceu Valença - Flor de Tangerina (Trilha Original de Velho Chico)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="80%" height="369" src="https://www.youtube.com/embed/YIUXy-faPmo" title="Seja Como For | Steven Universo: O Filme | Steven Universo | Cartoon Network" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="80%" height="369" src="https://www.youtube.com/embed/tMWpm_GOLaA" title="Rubel - Quando Bate Aquela Saudade [Clipe Oficial]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
            <h2>Menções honrosas</h2>
            <a href="https://www.youtube.com/watch?v=hh9WgYHRuhU&pp=ygUVRGphdmFuIC0gVW0gQW1vciBQdXJv">Um amor puro</a>
            <a href="https://www.youtube.com/watch?v=QODeOVhw0rc">Só você</a>
            <br>
            <a href="https://www.youtube.com/watch?v=iJ6PbgiylCI">Dona da minha cabeça</a>
            <br>
            <br>
        </section>
    `
}

menu1.addEventListener('click', sobreNos)
menu2.addEventListener('click', NossasCancoes)

sobreNos()