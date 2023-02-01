[PT-BR]eae, manos(as). meu readme é literalmente meu caderno equanto eu codo. Tentarei organizá-lo , prometo. preciso traduzir isso também. 
[ENG]sup? my readme is literally my diary while i code. I'll try to organize it, promise. I need to translate this tooooo


# ControleFinanceiro.js
 Aplicação de JavaScript puro em um sistema de controle finaceiro. Usando um boilerplate HTML + CSS. 


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
- 
![image](https://user-images.githubusercontent.com/101754313/215917104-4403717b-ea2e-4ccc-9da5-6e02e37cdfb9.png)


