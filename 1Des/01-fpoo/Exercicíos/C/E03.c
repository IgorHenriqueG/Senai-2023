#include <stdio.h>

int main(void){
	// Funcionalidade utilizada, float: Permite ter numeros reais (Com casas decimais), exemplo 0.45
	
	char nome[20]; // Cria vari�vel "nome" e aloca 20 bits a ela
	float salario; // Cria vari�vel "sal�rio"
	float salario2; // Cria vari�vel "sal�rio2"
	float reajuste; // Cria vari�vel "indice"
	
	printf("Insira seu nome: "); // Requisita ao usu�rio digitar seu nome
	scanf("%s", &nome); // Registra e armazena o nome do usu�rio na variavel "nome"
	
	printf("Insira seu salario do mes anterior: "); // Requisita ao usu�rio inserir um valor
	scanf("%f", &salario); // Registra e armazena o valor na vari�vel "sal�rio"
	
	printf("Insira o reajuste (%%): "); // Requisita ao usu�rio inserir um valor
	scanf("%f", &reajuste); // Registra e armazena o valor na vari�vel "sal�rio2"
	
	//printf("Insira o indice percentual de reajuste de salario (%%): "); // Requisita ao usu�rio inserir um valor. "(%%)" Imprime o simbulo de % na tela.
	//scanf("%f", &indice); // Registra e armazena o valor na vari�vel "indice"
	
	salario2 = (salario*(reajuste+100))/100; // Faz a conta "(salario*(reajuste+100))/100" e a armazena na variavel indice*
	
	
	
	printf("Ola, %s. \nSeu novo salario e: %.0f%%", nome, salario2); // Imprime na tela o nome do usu�rio e o indice salarial (%). Funcionalidade "%.02f", define o n�mero de casas decimais do float em 2
	return 0;
}
