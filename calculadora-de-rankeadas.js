function calculadora_de_rankeadas(vitorias){

    tier = ""
    //Estrutura condicional que define o output se baseando no valor do input
    if(typeof vitorias != "number") {
      console.log("Insira um valor válido!")
    } else if(vitorias < 10) {  
      tier = "Ferro"
    } else if(vitorias < 20) {
        tier = "Bronze"
    } else if(vitorias < 50) {
        tier = "Prata"
    } else if(vitorias < 80) {
        tier = "Ouro"
    } else if(vitorias < 90) {
        tier = "Diamante"
    } else if(vitorias < 100) {
        tier = "Lendário"
    } else {
        tier = "Imortal"
    }

    console.log(`O jogador tem ${vitorias} vitorias e seu tier é ${tier}`)
}
