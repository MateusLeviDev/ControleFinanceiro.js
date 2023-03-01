[PT-BR]eae, manos(as). meu readme é literalmente meu caderno enquanto eu codo. Tentarei organizá-lo , prometo. preciso traduzir isso também. <br>
[ENG]sup? my readme is literally my diary while i code. I'll try to organize it, promise. I need to translate this tooooo


# ControleFinanceiro.js
#### `Pure JavaScript application in a financial control system. Using an HTML + CSS boilerplate.`


- O parâmetro `transaction` recebe um objeto que representa a transação podemos verificar o valor dessa propriedade amount. Caso o valor seja menor que 0 podemos armazenar um operador de subtração em uma const, caso contrario será de adição. 

```
const operator = trasaction.amount < 0 ? '-'
```
<p>
a `const operator` que recebe um ternário com a condição de se o valor for < 0, armazenando uma string com o sinal de '-' (subtração). Caso false, será valor positivo '+'.
</p>
 
 ```
 const init = () => {
  dummyTrasactions.forEach(addTransactionIntoDOM)
 }
 ```
<p>
Função que vai executar o preenchimento das informações do estado da aplicação quando a página for carregada
</p>

## Armazenando diversos valores 

-  Armazenar os valores em um array. Caso clássico para o uso do `map`
-  Podemos inteirar por esse array, gerar um novo com a mesma quantidade de itens com valores.
- Podemos calcular o valor total do saldo e pra fazer isso, somando e subtraindo os valores do array `transationAmount`. Para isso usamos o reduce. Recebe uma função por argumento e executa essa função para cda item do array, podendo ser um obj literal, uma string, um número e até mesmo um outro array. 
 
![image](https://user-images.githubusercontent.com/101754313/215913155-5beae0d6-df8e-4d1a-b24c-ab4a859e9915.png)

- Essa função vai ser executada para cada item do array `numbers`, na primeira vez que ela for executada oparâmetro `acumulator` receberá zer0. 
- Já `number` recebe o primeiro item do array [1]
- portando, 0 + 1 = 1
- [1] vai ser recebido somente pelo parâmetro acumulator, que terá valor 1 agora.
- agora, 1 (cumulator) + 2 (segundo n° do array) = 3
- 6
- quando se trata do `reduce` é fundamental entender duas coisas
1 : essa função sempre precisa retornar um valor, e cada vez que é retornado o acumulator recebe o valor. Zero serviu apenas para somar pelo parâmetro.
- boa prática ter um valor específicada com algo real, para identificar o tipo de dado que o reduce vai retornar quando for finalizado.
[aula reduce link yb]

![image](https://user-images.githubusercontent.com/101754313/215914980-8da5ccf6-be4d-4538-b025-243a760b2712.png)

-  utilizaremos um método filter: o item vai ser add no array apenas quando a condição que essa funcao retornar true
- função valor total das receitas

![image](https://user-images.githubusercontent.com/101754313/215917104-4403717b-ea2e-4ccc-9da5-6e02e37cdfb9.png)

<p>
agora que obtemos o valor total do saldo e das despesas iremos obter o valor total das despesas. despois inserimos essas info no DOM para aprecer no topo da nossa interface. 
</p>

![image](https://user-images.githubusercontent.com/101754313/216111017-970ac75e-c910-4e0a-ab87-d96e54e83a63.png)

- ☝️ recebe um array apenas com os valores das despesas. No console:

![image](https://user-images.githubusercontent.com/101754313/216111498-cd8af332-f577-48ae-95bb-57adab6aa31f.png)
<br>

Agora iremos inserir as informações no DOM. 

- Obtendo a referência desse `h1` do saldo atual.
- do `p` que exibe o valor total das receitas 
- e do `p` que exibe o valor total das despesas 
 
![image](https://user-images.githubusercontent.com/101754313/216114059-808c6911-4e16-4cb7-9457-c37c8111bed6.png)

- Veremos um objeto com as ref dos elementos que exibem os saldos, as despesas e as receitas na tela

![image](https://user-images.githubusercontent.com/101754313/216116826-a9c3ebd2-10c3-46c0-b877-befcd43690eb.png)

- consertando o valor negativo no valor das despesas. 
- pelo método abs do método `Math`

![image](https://user-images.githubusercontent.com/101754313/216117322-75357e14-bed3-4dbd-82dc-595db3f3e50c.png)

```
Despesas R$ 30.00
```
# Implementar funcionalidades no Form

- Implementar uma transação 
- em seguida, a possibilidade de remoção das transações ao clicar no "X"
- Precisaremos de um listener de eventos que executa uma ação após o form ser enviado
- Obter a ref do form 

![image](https://user-images.githubusercontent.com/101754313/216123145-7de526d0-21ab-4f1d-9ff9-6d7daab2c923.png)


- Em azul obtemos o valor que o input tem no momento que o form é enviado
- E em vermelho vai remover dessa string qualquer espaço em branco do inicio ao fim 
- Como ficará o `id`, para isso vou gerar uma função que produz IDs aleatórios [VERDE]
- `correção`: `id: generateID()`

```
const init = () => {
    dummyTrasactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}
```

- ela soma pelo array das transações e pra cada item desse array ela insere esssa transaction no DOM

`erro no transferência, resultando em uma string`
- Dentro do reduce a última execução da função esta concatenando um número com uma string, e isso resulta em string. Ou seja, a expressão resulta em uma string na qual o toFixed esta encadeado. `toFixed` método que precisa ser encadeado por um número.

![image](https://user-images.githubusercontent.com/101754313/216454862-4ffd7415-6202-46eb-a50a-ee686ae2e7ed.png)

```
para conversão da array de objetos em string:


JSON.stringify(transactions)
```

- ocorrendo a atualização quando o `form` for enviado 
