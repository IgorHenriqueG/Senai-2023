#include <stdio.h>

int main(void){
	int alqueires; // Cria a vari�vel "alqueires"
	int caminhoes; // Cria a vari�vel "caminhoes"
	int resultado; // Cria a vari�vel "resultado"
	
	printf("Alqueires: "); // Requisita ao usu�rio digitar um valor
	scanf("%d", &alqueires); // Registra e armazena o valor na vari�vel "alqueires"
	
	printf("Caminhoes: "); // Requisita ao usu�rio digitar um valor
	scanf("%d", &caminhoes); // Registra e armazena o valor na vari�vel "caminhoes"
	
	if (caminhoes > 0){ // Valida se o valor digitado � maior que 0
		alqueires = alqueires * 250; // Faz a conta "alqueires * 250" e a armazena na vari�vel "alqueires"
		resultado = (alqueires / 18) / caminhoes; // Faz a conta "(alqueires / 18) / caminhoes" e a armazena na vari�vel "resultado"
	} else { // Caso a valida��o do valor digitado falhe, serpa imprimido na tela "Precisa haver ao menos um caminh�o"
		printf("Precisa haver ao menos um caminhao");
		return 0;
	}
	
	printf("O numero total de viagens e: %d", resultado); // Imprime na tela o resultado final
	
	return 0;
}
