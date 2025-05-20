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
const spin = ()=> {
    const symbols = []
    for(const[symbol, count] of Object.entries(symbolCount)){
        for (i=0; i<count; i++){
            symbols.push(symbol)
        }

        }
    const reels = []
    for (let i=0; i<COLS; i++) {
        reels.push([])
        const reelsSymbols = [...symbols]
        for (let j=0; j<ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelsSymbols.length)
            const selectedSymbols = reelsSymbols[randomIndex]
            reels[i].push(selectedSymbols)
            reelsSymbols.splice(randomIndex, 1)

        }
    } 
    return reels

    }


const transpose = (reels)=> {
    const rows = []
    for (i=0; i<ROWS; i++) {
        rows.push([])
        for (j=0; j<COLS; j++) {
            rows[i].push(reels[j][i])

        }


    }
    return rows;
}    

const printRows = (rows)=> {
    for (const row of rows) {
        let rowString = ""
        for (const [i, symbol] of row.entries()){
            rowString += symbol
            if (i < row.length) {
                rowString += " | "
            }

        }
    console.log(rowString)    

    }
}

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row = 0; row < lines; row++){
        const symbols = rows[row];
        let allSame =true;
        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }

        }
        if (allSame) {
            winnings += bet * symbolValue[symbols[0]]
        }
    }
    return winnings;
};

const game = () => {
    let balance = deposit()
    while (true) {
        console.log("Your balance is: " + balance)
        const lines  = getNumberOfLines()
        const bet = getBet(balance, lines)
        balance -= bet * lines
        const reels = spin()
        const rows = transpose(reels)
        printRows(rows);
        const winnings = getWinnings(rows, bet, lines);
        balance += winnings
        console.log("You won: " + winnings.toString());
        if (balance <= 0) {
            console.log("You ran out of money!")
            break;
        }
        const playAgain = prompt("Do you want to again? (yes)")
        if (playAgain != "yes") {
            break;
        }


    }
}

// const reels  = spin()
// const rows = transpose(reels)
// const result = printRows(rows)
// const winning = getWinnings(rows, 20, 2)
// console.log(reels)
// console.log(reels[0])
// console.log(rows)
// console.log(winning)
game()


