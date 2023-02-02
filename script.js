const transactionsUl = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus') //id no paragrafo que exibe o valor total da receita 
const expenseDisplay = document.querySelector('#money-minus') // id valor total despesas
const balanceDisplay = document.querySelector('#balance') //id do h1 que exibe o saldo total
const form = document.querySelector('#form')
const inputTransactionName = document.querySelector('#text')
const inputTransactionAmount = document.querySelector('#amount')


// declaramos um array de objetos para simular algumas transações 

const localStorageTransactions = JSON.parse(localStorage
    .getItem('transactions'))
let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : []

//criaremos uma função que adcionará as transações no DOM

/* <ul id="transactions" class="transactions"></ul>

para que essa url seja preenchida  */

const removeTransaction = ID => {
    //remover do DOM a transação que foi clicada. Faremos com que esse array dummy receba as transações que ele ja tem, excente a clicada
    transactions = transactions
    .filter(transaction => 
        transaction.id !== ID)
    init()
}

const addTransactionIntoDOM = transaction => {
    // dentro dessa função iremos gerar uma li com os dados 
    const operator = transaction.amount < 0 ? '-' : '+';
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li') //met que criamos novo element html

    li.classList.add(CSSClass)
    li.innerHTML = `
    ${transaction.name} 
    <span>${operator} R$ ${amountWithoutOperator}</span>
    <button class="delete-btn" onClick="removeTransaction(${transaction.id})">
    x
    </button>
    `
    transactionsUl.prepend(li)

} // ctrl + k + f identação -----  shift alt mais seta

const updateBalanceValues = () => {
    const transactionsAmount = transactions
        .map(transaction => transactions.amount)
    const total = transactionsAmount
        .reduce((accumulator, transaction) => accumulator + transaction, 0)
        .toFixed(2) 
    // utilizaremos um método filter 
    const income = transactionsAmount
        .filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2)
    //agora que obtemos o valor total do saldo e das despesas iremos obter o valor total das despesas. despois inserimos essas info no DOM para aprecer no topo da nossa interface. 
    const expense = Math.abs(transactionsAmount
    .filter(value => value < 0)
    .reduce((accumulator, value) => accumulator + value, 0))
    .toFixed(2) //recebe um array apenas com os valores das despesas
   
    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
}

const init = () => {
    transactionsUl.innerHTML = ''
    transactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}

init()

const generateID = () => Math.round(Math.random() * 1000)

form.addEventListener('submit', event => {
    event.preventDefault() //impedidno que o form seja enviado. Precisa garantir que tudo foi preenchido. 
    // verificação 
    const transactionName = inputTransactionName.value.trim() //para armazenar esses valores do dummyTransaction
    const transactionAmount = inputTransactionAmount.value.trim()
    if (transactionName === '' || transactionAmount === '') {
        alert('Por favor preencha por completo a transação')
        return 
    }
    // dois inputs preenchidos 
    // objeto que representa a transação
    const transaction =  { 
        id: generateID(), 
        name: transactionName, 
        amount: Number(transactionAmount)
    }
    
    transactions.push(transaction)
    init()

    inputTransactionName.value = ''
    inputTransactionAmount.value = ''
})