var n = 0;
function gerar(){
    n = Math.floor(Math.random()* 900000) + 100000;
    document.getElementById("caixa-senha").innerText =  n;
}