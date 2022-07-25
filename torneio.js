// BOTAO PARA MOSTRA INSCRITOS
let btnInscritos = document.querySelector("#btnInscritos");
// BOTAO PARA confirmar inscrição
let btnConfirmar = document.querySelector("#btnConfirmar");

// REFERNCIAR AS ENTRADAS 
let entradaNome = document.querySelector("#nome");
let entradaIdade = document.querySelector("#idade");
// REFERENCIAR AS SAIDAS 
let listaJ = document.querySelector("#listJ");
let listaM = document.querySelector("#listM");
let listaS = document.querySelector("#listS");

// função botao de aparecer e desaparcer inscritos
btnInscritos.addEventListener("click", () =>{

    let list = document.querySelector("#allLists");
    
    if(list.style. display == "none"){
        list.style.display = "flex";
    }else{
        list.style.display = "none";
    }

} )

// evento e função confirmar
btnConfirmar.addEventListener("click", confirmar)

function confirmar(){
    
    let nome = entradaNome.value ;
    entradaNome.value = "";
    entradaNome.focus();
    
    let idade = entradaIdade.value ;
    entradaIdade.value = "";
    entradaIdade.focus();
    
    let novoLi = document.createElement("li");
    novoLi.textContent = nome +  ", " + idade ;
    
    if( nome != "" && idade != ""){
        
        if(idade <= 0){
            window.alert("ERRO: idade inválida !")    
        }
        else if(idade < 18 && idade > 0){
            listaJ.appendChild(novoLi);
            novoLi.style.color = "darkgreen";
        }
        else if(idade > 40){
            listaS.appendChild(novoLi);
            novoLi.style.color = "darkviolet";
        }
        else{
            listaM.appendChild(novoLi);
            novoLi.style.color = "darkblue";
        }
    }
    else{
        window.alert("ERRO: Algum dado está incompleto !");
    }
}