#include <stdio.h>

int main(void){
	char nome[20]; // Cria a vari�vel "nome" e aloca 20 bits a ela
	float preco; // Cria a vari�vel "preco"
	float valor; // Cria a vari�vel "valor"
	
	printf("Produto que deseja: "); // Requisita ao usu�rio digitar o nome do produto
	scanf("%s", &nome); // Registra e armazena o nome do produto na vari�vel "nome"
	
	printf("Preco do produto: R$"); // Requisita ao usu�rio digitar um valor
	scanf("%f", &preco); // Registra e armazena o valor na vari�vel "preco"
	
	valor = preco * 1.05; // Faz a conta "preco * 1.05" e a armazena na vari�vel "valor"
	
	printf("Com 5%% de aumento o produto %s esta R$%.02f", nome, valor); // Imprime na tela o nome do produto e o valor final
}
