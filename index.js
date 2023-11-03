let win = 200
let lose = 4

function WinLose(win, lose){
    return win - lose
}

function rankCalc(balance){
    if(balance <= 10){
        return "Ferro"
    }
    else if(balance >= 11 && balance <= 20){
        return "Bronze"
    }
    else if(balance >= 21 && balance <= 50){
        return "Prata"
    }
    else if(balance >= 51 && balance <= 80){
        return "Ouro"
    }
    else if(balance >= 81 && balance <= 90){
        return "Diamante"
    }
    else if(balance >= 91 && balance <= 100){
        return "Lendário"
    }
    else{
        return "Imortal"
    }
}
function printRank(win,lose){
    let balance = WinLose(win,lose)
    let rank = rankCalc(balance)
    console.log(`O Herói tem saldo de vitórias de ${balance} e está no nível ${rank}`)
}
printRank(win, lose)