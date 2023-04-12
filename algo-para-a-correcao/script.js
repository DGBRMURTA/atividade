var elementos = [[10,22,3],
                 [14,5,61],
                 [73,73,9]]
function Executar(){
    var container = document.getElementById('resposta')
    var num1 = elementos[1][2]
    var num2 = elementos[2][2]
    maior = elementos[0][0]
    for(i=0;i<3;i++){
        for(k=0;k<3;k++){
            if(maior < elementos[i][k]){
                maior = elementos[i][k]
            }
        }
    }
    menor = elementos[0][0]
    for(i=0;i<3;i++){
        for(k=0;k<3;k++){
            if(menor > elementos[i][k]){
                menor = elementos[i][k]
            }
        }
    }
    var soma = 0
    var media = 0
    contador = 0
    for(i=0;i<3;i++){
        for(k=0;k<3;k++){
            soma = soma + elementos[i][k]
            contador = contador + 1
            media = soma / contador
        }
    }
    container.innerHTML = 'O maior elemento é o '+ maior + ' e o menor elemento é o '+ menor +' e a soma de todos os elementos é: '+ soma + '<br> e a média é: '+media

}