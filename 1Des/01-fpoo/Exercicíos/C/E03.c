#include <stdio.h>

int main(void){
	// Funcionalidade utilizada, float: Permite ter numeros reais (Com casas decimais), exemplo 0.45
	
	char nome[20]; // Cria variável "nome" e aloca 20 bits a ela
	float salario; // Cria variável "salário"
	float salario2; // Cria variável "salário2"
	float indice; // Cria variável "indice"
	float resultado;
	
	printf("Insira seu nome: "); // Requisita ao usuário digitar seu nome
	scanf("%s", &nome); // Registra e armazena o nome do usuário na variavel "nome"
	
	printf("Insira seu salario do mes anterior: "); // Requisita ao usuário inserir um valor
	scanf("%d", &salario); // Registra e armazena o valor na variável "salário"
	
	printf("Insira seu salario do mes atual: "); // Requisita ao usuário inserir um valor
	scanf("%d", &salario2); // Registra e armazena o valor na variável "salário2"
	
	//printf("Insira o indice percentual de reajuste de salario (%%): "); // Requisita ao usuário inserir um valor. "(%%)" Imprime o simbulo de % na tela.
	//scanf("%f", &indice); // Registra e armazena o valor na variável "indice"
	
	indice = ((salario2 / salario) - 1) * 100; // Faz a conta "((salario2 / salario) - 1) * 100" e a armazena na variavel indice*
	
	
	
	printf("Ola, %s. \nSeu indice salarial e: %.02f%%", nome, indice); // Imprime na tela o nome do usuário e o indice salarial (%). Funcionalidade "%.02f", define o número de casas decimais do float em 2
	return 0;
}
