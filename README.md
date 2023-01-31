# ControleFinanceiro.js
 Aplicação de JavaScript puro em um sistema de controle finaceiro. Usando um boilerplate HTML + CSS. 


- O parâmetro `transaction` recebe um objeto que representa a transação podemos verificar o valor dessa propriedade amount. Caso o valor seja menor que 0 podemos armazenar um operador de subtração em uma const, caso contrario será de adição. 

```
const operator = trasaction.amount < 0 ? '-'
```
<p>
a `const operator` que recebe um ternário com a condição de se o valor for < 0, armazenando uma string com o sinal de '-' (subtração). Caso false, será valor positivo '+'.
</p>
