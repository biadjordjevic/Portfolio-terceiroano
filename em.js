document.addEventListener("DOMContentLoaded", () =>{
    const botao =document.getElementById("btn");
    const conteudo = document.getElementById("conteudo-recolhivel");
    
    botao.addEventListener("click", () =>{
        const visivel =conteudo.style.display === "block";
        if(visivel){
            conteudo.style.display = "none";
            botao.textContent = "1° trimestre";
        }
        else{
            conteudo.style.display = "block";
            botao.textContent = "Fechar";
        }
    });

    
    
    // const botao2 =document.getElementById("btn2");
    // const conteudo2 = document.getElementById("conteudo-recolhivel2");

    // botao2.addEventListener("click", () =>{
    //     const visivel =conteudo2.style.display === "block";
    //     if(visivel){
    //         conteudo2.style.display = "none";
    //         botao2.textContent = "Ver tudo";
    //     }
    //     else{
    //         conteudo2.style.display = "block";
    //         botao2.textContent = "Fechar";
    //     }
    // });
}
);

document.addEventListener("DOMContentLoaded", () =>{
    const botao =document.getElementById("btn2");
    const conteudo = document.getElementById("conteudo-recolhivel2");
    
    botao.addEventListener("click", () =>{
        const visivel =conteudo.style.display === "block";
        if(visivel){
            conteudo.style.display = "none";
            botao.textContent = "2° trimestre";
        }
        else{
            conteudo.style.display = "block";
            botao.textContent = "Fechar";
        }
    }); })

   
    const botoesUC = document.querySelectorAll(".btn-uc");

    botoesUC.forEach((btn) => {
        btn.addEventListener("click", () => {
            const conteudo = btn.nextElementSibling; // pega o próximo div
            const visivel = conteudo.style.display === "block";

            if (visivel) {
                conteudo.style.display = "none";
                btn.textContent = btn.dataset.label || btn.textContent;
            } else {
                conteudo.style.display = "block";
                btn.dataset.label = btn.textContent; // guarda o texto original
                btn.textContent = "Fechar";
            }
        });
    });

  document.addEventListener("DOMContentLoaded", () =>{
    const botao =document.getElementById("btn3");
    const conteudo = document.getElementById("conteudo-recolhivel3");
    
    botao.addEventListener("click", () =>{
        const visivel =conteudo.style.display === "block";
        if(visivel){
            conteudo.style.display = "none";
            botao.textContent = "3° trimestre";
        }
        else{
            conteudo.style.display = "block";
            botao.textContent = "Fechar";
        }
    }); })

    