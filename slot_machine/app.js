const ROWS = 3
const COLS = 3
const symbolCount = {
    A: 2, 
    B: 4,
    C: 6,
    D: 8
}
const symbolValue = {
    A: 100, 
    B: 50,
    C: 20,
    D: 10
}

const prompt = require("prompt-sync")();

const deposit = ()=> {
    while(true){
        const depositAmount = prompt("Enter your deposit: ")
        const depositAmountInNumber = parseFloat(depositAmount)
        if (isNaN(depositAmountInNumber) || depositAmountInNumber <=0){
            console.log("Invalid input! Please enter a valid amount")
        }
        else{
            return depositAmountInNumber
        }
}
}


const getNumberOfLines = ()=> {
    while(true){
        const lines = prompt("Enter your number of lines(1-3): ")
        const numberOfLines = parseFloat(lines)
        if (isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines > 3){
            console.log("Invalid input! Please enter a valid amount")
        }
        else{
            return numberOfLines
        }
}
}

const getBet = (balance, lines)=> {
    while(true){
        const bet = prompt("Enter your number of bet: ")
        const numberofBet = parseFloat(bet)
        if (isNaN(numberofBet) || numberofBet <=0 || numberofBet >  (balance / lines)){
            console.log("Insufficient fund.")
        }
        else{
            return numberofBet
        }
}
}
// balance = deposit()
// lines =  getNumberOfLines()
// bet = getBet(balance, lines)
console.log(Object.symbolCount.e)
