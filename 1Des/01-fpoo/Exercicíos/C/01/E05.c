#include <stdio.h>

int main(void){
	int numero; // Cria a vari�vel "numero"
	int numero1; // Cria a vari�vel "numero1"
	int numero2; // Cria a vari�vel "numero2"
	
	printf("Insira um numero inteiro: "); // Requisita ao usu�rio digitar um valor
	scanf("%d", &numero); // Registra e armazena o valor na vari�vel "numero"
	
	if(numero > 0 ){ // Valida se o valor digitado � maior que 0
		numero1 = numero + 1; // Incrementa o valor de "numero" em 1 e o armazena em "numero1"
		numero2 = numero - 1; // Reduz o valor de "numero" em 1 e o armazena em "numero2"
	} 
	
	else { // Caso a valida��o do valor digitado falhe, ser� imprimido na tela "O n�mero inserido deve ser maior que 0"
		printf("O numero inserido deve ser maior que 0");
		return 0;
	}
	
	printf("O numero escolhido foi %d \n%d + 1 = %d \n%d - 1 = %d ",numero , numero, numero1, numero, numero2); // Imprime na tela em ordem as vari�veis "numero", "numero", "numero1", "numero", "numero2"
	return 0;	
}
