#include <stdio.h>

int main(void){
	char time[20]; // Cria vari�vel "time" e aloca 20 bits a ela
	int vitorias; // Cria a vari�vel "vitorias"
	int empates; // Cria a vari�vel "empates"
	//int p; // Cria a vari�vel "p"

	printf("Insira o nome do time: "); // Requisita ao usu�rio digitar o nome do time
	scanf("%s", time); // Registra e armazena o nome do time na vari�vel "time"
	
	printf("Insite o total de vitorias do time: "); // Requisita ao usu�rio digitar um valor
	scanf("%d", &vitorias); // Registra e armazena o valor na vari�vel "vitorias"
	
	printf("Insite o total de empates do time: "); // Requisita ao usu�rio digitar um valor
	scanf("%d", &empates); // Registra e armazena o valor na vari�vel "empates"
	
	vitorias = vitorias*3; // Modifica o valor da vari�vel "vitorias" para que seja 3x maior do que ela mesma
	empates = empates++; // Incrementa a variavel "empates" por 1
	
	vitorias = vitorias + empates; // Reescreve o valor da vari�vel "vitorias" com o valor resultante da conta "vitorias + empates" 
	
	printf("O time %s tem um total de %d pontos", time, vitorias); // Imprime na tela o resultado final de pontos do time na variavel "v"
	return 0;
}
