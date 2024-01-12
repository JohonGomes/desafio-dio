// 1.Definindo uma variável para armazenar o nome.
let nomeHeroi = "Gojo Satoru" 

// 2.Quantidade de experiência (XP) de um herói.
let quantidadeXp = 10001

// 3.Utilize uma estrutura de descisão para apresentar a mensagem.

if(quantidadeXp <=1 ){
    nivel = "Ferro"

} else if (quantidadeXp >=1001 && quantidadeXp <=2000){
    nivel = "Bronze"
    
}else if (quantidadeXp >=2001 && quantidadeXp <=5000){
    nivel = "Prata"

}else if (quantidadeXp >=5001 && quantidadeXp <= 7000){
    nivel = "Ouro"

}else if (quantidadeXp >=7001 && quantidadeXp <=8000){
    nivel = "Platina"

}else if (quantidadeXp >= 8001 && quantidadeXp <=9000){
    nivel = "Ascendente"

}else if (quantidadeXp >= 9001 && quantidadeXp <=10000){
    nivel = "Imortal"

}else {
    nivel = "Radiante"
}

//4. Ao Final exibir mensagem " O Herói de nome _____ está no nível ____"
console.log("O herói de nome " + nomeHeroi + " está no nível " + quantidadeXp)





