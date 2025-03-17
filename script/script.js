let aceito = document.querySelector("#aceito")
let negado = document.querySelector("#negado")
aceito.addEventListener('click',()=>{
    location.href = "acpte.html" 
})
negado.addEventListener('click',()=>{
    negado.style.position ='absolute';
    negado.style.bottom = geraPosicao(10, 90);
    negado.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min) + "%";
    }
    console.log("opa")
})
