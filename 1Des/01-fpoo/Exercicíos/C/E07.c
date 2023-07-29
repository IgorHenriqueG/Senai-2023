#include <stdio.h>

int main(void){
	int alqueires; // Cria a variável "alqueires"
	int caminhoes; // Cria a variável "caminhoes"
	int resultado; // Cria a variável "resultado"
	
	printf("Alqueires: "); // Requisita ao usuário digitar um valor
	scanf("%d", &alqueires); // Registra e armazena o valor na variável "alqueires"
	
	printf("Caminhoes: "); // Requisita ao usuário digitar um valor
	scanf("%d", &caminhoes); // Registra e armazena o valor na variável "caminhoes"
	
	if (caminhoes > 0){ // Valida se o valor digitado é maior que 0
		alqueires = alqueires * 250; // Faz a conta "alqueires * 250" e a armazena na variável "alqueires"
		resultado = (alqueires / 18) / caminhoes; // Faz a conta "(alqueires / 18) / caminhoes" e a armazena na variável "resultado"
	} else { // Caso a validação do valor digitado falhe, serpa imprimido na tela "Precisa haver ao menos um caminhão"
		printf("Precisa haver ao menos um caminhao");
		return 0;
	}
	
	printf("O numero total de viagens e: %d", resultado); // Imprime na tela o resultado final
	
	return 0;
}
