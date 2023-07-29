#include <stdio.h>

int main(void){
	int a; // Cria variável "a"
	int b; // Cria variável "b"
	int c; // Cria variável "c"
	
	printf("Digite o valor de soma A: "); // Requisita ao usuário digitar um valor
	scanf("%d", &a); // Registra e armazena o valor na variável "a"
	
	printf("Digite o valor de soma B: "); // Requisita ao usuário digitar um valor
	scanf("%d", &b); // Registra e armazena o valor na variável "b"
	
	printf("Digite o valor de divisao: "); // Requisita ao usuário digitar um valor
	scanf("%d", &c); // Registra e armazena o valor na variável "c"
	
	c = (a + b) / c; // Faz a conta de "(a + b) / c" e a armazena na variável "c"
	
	printf("O valor final e: %d", c); // Imprime na tela o valor final da conta
	return 0;
}
