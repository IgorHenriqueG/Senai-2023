#include <stdio.h>

int main(void){
	char time[20]; // Cria variável "time" e aloca 20 bits a ela
	int vitorias; // Cria a variável "vitorias"
	int empates; // Cria a variável "empates"
	//int p; // Cria a variável "p"

	printf("Insira o nome do time: "); // Requisita ao usuário digitar o nome do time
	scanf("%s", time); // Registra e armazena o nome do time na variável "time"
	
	printf("Insite o total de vitorias do time: "); // Requisita ao usuário digitar um valor
	scanf("%d", &vitorias); // Registra e armazena o valor na variável "vitorias"
	
	printf("Insite o total de empates do time: "); // Requisita ao usuário digitar um valor
	scanf("%d", &empates); // Registra e armazena o valor na variável "empates"
	
	vitorias = vitorias*3; // Modifica o valor da variável "vitorias" para que seja 3x maior do que ela mesma
	empates = empates++; // Incrementa a variavel "empates" por 1
	
	vitorias = vitorias + empates; // Reescreve o valor da variável "vitorias" com o valor resultante da conta "vitorias + empates" 
	
	printf("O time %s tem um total de %d pontos", time, vitorias); // Imprime na tela o resultado final de pontos do time na variavel "v"
	return 0;
}
