#include <stdio.h>

int main(void){
	// Funcionalidade utilizada, float: Permite ter numeros reais (Com casas decimais), exemplo 0.45
	
	char nome[20]; // Cria variável "nome" e aloca 20 bits a ela
	float salario; // Cria variável "salário"
	float salario2; // Cria variável "salário2"
	float reajuste; // Cria variável "indice"
	
	printf("Insira seu nome: "); // Requisita ao usuário digitar seu nome
	scanf("%s", &nome); // Registra e armazena o nome do usuário na variavel "nome"
	
	printf("Insira seu salario do mes anterior: "); // Requisita ao usuário inserir um valor
	scanf("%f", &salario); // Registra e armazena o valor na variável "salário"
	
	printf("Insira o reajuste (%%): "); // Requisita ao usuário inserir um valor
	scanf("%f", &reajuste); // Registra e armazena o valor na variável "salário2"
	
	//printf("Insira o indice percentual de reajuste de salario (%%): "); // Requisita ao usuário inserir um valor. "(%%)" Imprime o simbulo de % na tela.
	//scanf("%f", &indice); // Registra e armazena o valor na variável "indice"
	
	salario2 = (salario*(reajuste+100))/100; // Faz a conta "(salario*(reajuste+100))/100" e a armazena na variavel indice*
	
	
	
	printf("Ola, %s. \nSeu novo salario e: %.0f%%", nome, salario2); // Imprime na tela o nome do usuário e o indice salarial (%). Funcionalidade "%.02f", define o número de casas decimais do float em 2
	return 0;
}
