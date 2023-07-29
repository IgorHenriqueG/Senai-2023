#include <stdio.h>

int main(void){
	char nome[20]; // Cria a variável "nome" e aloca 20 bits a ela
	float preco; // Cria a variável "preco"
	float valor; // Cria a variável "valor"
	
	printf("Produto que deseja: "); // Requisita ao usuário digitar o nome do produto
	scanf("%s", &nome); // Registra e armazena o nome do produto na variável "nome"
	
	printf("Preco do produto: R$"); // Requisita ao usuário digitar um valor
	scanf("%f", &preco); // Registra e armazena o valor na variável "preco"
	
	valor = preco * 1.05; // Faz a conta "preco * 1.05" e a armazena na variável "valor"
	
	printf("Com 5%% de aumento o produto %s esta R$%.02f", nome, valor); // Imprime na tela o nome do produto e o valor final
}
