#include <stdio.h>

int main(void){
	int a; // Cria vari�vel "a"
	int b; // Cria vari�vel "b"
	int c; // Cria vari�vel "c"
	
	printf("Digite o valor de soma A: "); // Requisita ao usu�rio digitar um valor
	scanf("%d", &a); // Registra e armazena o valor na vari�vel "a"
	
	printf("Digite o valor de soma B: "); // Requisita ao usu�rio digitar um valor
	scanf("%d", &b); // Registra e armazena o valor na vari�vel "b"
	
	printf("Digite o valor de divisao: "); // Requisita ao usu�rio digitar um valor
	scanf("%d", &c); // Registra e armazena o valor na vari�vel "c"
	
	c = (a + b) / c; // Faz a conta de "(a + b) / c" e a armazena na vari�vel "c"
	
	printf("O valor final e: %d", c); // Imprime na tela o valor final da conta
	return 0;
}
