#include <stdio.h>

int main(void){
	// Funcionalidade utilizada, float: Permite ter numeros reais (Com casas decimais), exemplo 0.45
	
	char nome[20]; // Cria vari�vel "nome" e aloca 20 bits a ela
	float salario; // Cria vari�vel "sal�rio"
	int salario2; // Cria vari�vel "sal�rio2"
	int reajuste; // Cria vari�vel "reajuste"
	
	printf("Insira seu nome: "); // Requisita ao usu�rio digitar seu nome
	scanf("%s", &nome); // Registra e armazena o nome do usu�rio na variavel "nome"
	
	printf("Insira seu salario do mes anterior: "); // Requisita ao usu�rio inserir um valor
	scanf("%f", &salario); // Registra e armazena o valor na vari�vel "sal�rio"
	
	printf("Insira o reajuste (%%): "); // Requisita ao usu�rio inserir um valor
	scanf("%d", &reajuste); // Registra e armazena o valor na vari�vel "reajuste"
	
	salario2 = (salario*(reajuste+100))/100; // Faz a conta "(salario*(reajuste+100))/100" e a armazena na variavel "salario2"
	
	printf("Ola, %s. \nSeu novo salario e: %d%%", nome, salario2); // Imprime na tela o nome do usu�rio e o indice salarial (%)
	return 0;
}
