#include <stdio.h>

int main(void){
	
	int distancia; // Cria variável "distancia"
	int velocidade; // Cria variável "velocidade"
	
	printf("Digite a distancia a ser percorrida (km): "); // Requisita ao usuário digitar um valor
	scanf("%d", &distancia); // Registra e armazena o valor na variável "distancia"
	
	printf("Digite a velocidade do veiculo (km/h): "); // Requisita ao usuário digitar um valor
	scanf("%d", &velocidade); // Registra e armazena o valor na variável "velocidade"
	
	printf("Sera necessario percorrer por %d horas para chegar ao destino", distancia / velocidade); // Faz a conta de "velocidade / distancia" e as imprime como resultado na tela
	return 0;
}
