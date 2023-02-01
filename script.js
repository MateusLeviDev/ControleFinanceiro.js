const transactionsUl = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus') //id no paragrafo que exibe o valor total da receita 
const expenseDisplay = document.querySelector('#money-minus') // id valor total despesas
const balanceDisplay = document.querySelector('#balance') //id do h1 que exibe o saldo total

// declaramos um array de objetos para simular algumas transações 

const dummyTrasactions = [
    { id: 1, name: 'Bolo de brigadeiro', amount: -20 }, 
    { id: 2, name: 'Salário', amount: 300 }, 
    { id: 3, name: 'Torta', amount: -10 }, 
    { id: 4, name: 'Violão', amount: 150 }, 
]

//criaremos uma função que adcionará as transações no DOM

/* <ul id="transactions" class="transactions"></ul>

para que essa url seja preenchida  */

const addTransactionIntoDOM = trasaction => {
    // dentro dessa função iremos gerar uma li com os dados 
    const operator = trasaction.amount < 0 ? '-' : '+';
    const CSSClass = trasaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(trasaction.amount)
    const li = document.createElement('li') //met que criamos novo element html

    li.classList.add(CSSClass)
    li.innerHTML = `
    ${trasaction.name} <span>${operator} R$ ${amountWithoutOperator}
    </span><button class="delete-btn">x</button>
    `
    transactionsUl.prepend(li)

} // ctrl + k + f identação -----  shift alt mais seta

const updateBalanceValues = () => {
    const transactionsAmount = dummyTrasactions
        .map
        (trasaction => trasaction.amount)
    const total = transactionsAmount
        .reduce(
        (accumulator, transaction) => accumulator + transaction, 0)
        .toFixed(2) 
    // utilizaremos um método filter 
    const income = transactionsAmount
        .filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2)
    //agora que obtemos o valor total do saldo e das despesas iremos obter o valor total das despesas. despois inserimos essas info no DOM para aprecer no topo da nossa interface. 
    const expense = transactionsAmount
    .filter(value => value < 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2) //recebe um array apenas com os valores das despesas
   
    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
}

const init = () => {
    dummyTrasactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}

init()