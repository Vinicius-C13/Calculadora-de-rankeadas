function calculadora_de_rankeadas(vitorias){

    //Estrutura condicional que define o output se baseando no valor do input
    if(typeof vitorias != "number") {
      return "Insira um valor válido!"
    } else if(vitorias < 10) {  
      return "Ferro"
    } else if(vitorias < 20) {
        return "Bronze"
    } else if(vitorias < 50) {
        return "Prata"
    } else if(vitorias < 80) {
        return "Ouro"
    } else if(vitorias < 90) {
        return "Diamante"
    } else if(vitorias < 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}
