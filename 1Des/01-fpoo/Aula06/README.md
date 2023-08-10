# Resumo Aula FPOO (10/08)

- para executar utilize DevC++
  
|C|
|-|
|DevC++|

- Laços de Repetição

- Incremento e Decremento
```c

// Incrementar
i = i + 1; ou i++; // Aumenta a variavel "i" em 1.

// Decrementar
 i = i - 1; ou i--; // Reduz a variavel "i" em 1.
```
- Enquanto
```c
// Enquanto (Repita até algo acontecer).
while(Logica){

}

- Exemplo:

int i;
while(i <= 100){ // Enquanto a variável i for menor que 100.
    printf("A variavel i e menor que 100");
    i++; // Incrementa a variável i em 1, assim parando o while quando chegar a 100.
}

```
- Para
```c
// Para (Limite conhecido)
for(Variavel, logica, passo){

}

- Exemplo:
int i;
for(i = 0; i <= 100; i++){ // Enquanto a variável i for menor que 100 ela será incrementada em 1.
    printf("A variavel i e menor que 100");
}

```
- Faça enquanto
```c
// Faça enquanto (Pelo menos uma vez)
do{

}while(logica);

- Exemplo:

int i;
do{
    printf("A variavel i e menor que 100");
    i++;
}while(i <= 100) // Enquanto a variável i for menor que 1, será executado ao menos uma vez.
```