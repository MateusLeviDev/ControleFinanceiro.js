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
    updateLocalStorage()
    init()
}

const addTransactionIntoDOM = ({ amount, name, id }) => {
    // dentro dessa função iremos gerar uma li com os dados 
    const operator = amount < 0 ? '-' : '+';
    const CSSClass = amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(amount)
    const li = document.createElement('li') //met que criamos novo element html

    li.classList.add(CSSClass)
    li.innerHTML = `
        ${name} 
        <span>${operator} R$ ${amountWithoutOperator}</span>
        <button class="delete-btn" onClick="removeTransaction(${id})">x</button>
    `
    transactionsUl.append(li)
} // ctrl + k + f identação -----  shift alt mais seta

const getExpenses = transactionsAmounts => 
    Math.abs(transactionsAmounts
        .filter(value => value < 0)
        .reduce((accumulator, value) => accumulator + value, 0))
        .toFixed(2) //recebe um array apenas com os valores das despesas


const getIncome = transactionsAmounts => 
    transactionsAmounts
        .filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2)


const getTotal = transactionsAmounts => 
    transactionsAmounts
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2) 


const updateBalanceValues = () => {
    const transactionsAmounts = transactions.map(({ amount }) => amount)
    const total = getTotal(transactionsAmounts)
    // utilizaremos um método filter 
    const income = getIncome(transactionsAmounts)
    //agora que obtemos o valor total do saldo e das despesas iremos obter o valor total das despesas. despois inserimos essas info no DOM para aprecer no topo da nossa interface. 
    const expense = getExpenses(transactionsAmounts)
   
    balanceDisplay.textContent = `R$ ${total}}`;
    incomeDisplay.textContent = `R$ ${income}`;
    expenseDisplay.textContent = `R$ ${expense}`;
}

const init = () => {
    transactionsUl.innerHTML = ''
    transactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}

init()

const updateLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions)) //met vai salvar a info no localStorage
}

const generateID = () => Math.round(Math.random() * 1000)

const addToTransactionArray = (transactionName , transactionAmount) => {
    transactions.push({
        id: generateID(), 
        name: transactionName, 
        amount: Number(transactionAmount)
    })
}
const cleanInput = () => {
    inputTransactionName.value = ''
    inputTransactionAmount.value = ''
}

const handleFormSubmit = event => {
    event.preventDefault() //impedidno que o form seja enviado. Precisa garantir que tudo foi preenchido. 
    // verificação 
    const transactionName = inputTransactionName.value.trim() //para armazenar esses valores do dummyTransaction
    const transactionAmount = inputTransactionAmount.value.trim()
    const IsSomeInputEmpty = inputTransactionName.value = ''
    inputTransactionAmount.value = ''

    if (IsSomeInputEmpty) {
        alert('Por favor preencha por completo a transação')
        return 
    }
    // dois inputs preenchidos 
    // objeto que representa a transação
    addToTransactionArray(transactionName, transactionAmount)
    init()
    updateLocalStorage()
    cleanInput()
  
}

form.addEventListener('submit', handleFormSubmit)