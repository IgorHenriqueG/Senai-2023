#include <stdio.h>

int main(void){
	// Funcionalidade utilizada, float: Permite ter numeros reais (Com casas decimais), exemplo 0.45
	
	int distancia; // Cria a variável "distancia"
	float velocidade = 900; // Cria a variável "velocidade" e define seu valor como "900"
	float horas; // Cria a variável "horas"
	
	printf("Insira a distancia em km a ser percorrida: "); // Requisita ao usuário digitar um valor
	scanf("%d", &distancia); // Registra e armazena o valor na variável "distancia"
	
	horas = distancia / velocidade; // Faz a conta de "distancia / velocidade" e armazena na variável "horas"
	
	printf("O tempo total de horas de voo e de %.02f hora(s)", horas); // Imprime na tela o valor final da conta. Funcionalidade "%.02f", define o número de casas decimais do float em 2
	return 0;
}
