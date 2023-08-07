#include <stdio.h>

int main(void){
	float eleitores; // Cria a variável "eleitores"
	float votos; // Cria a variável "votos"
	
	printf("Quantos eleitores tem na cidade?: "); // Requisita ao usuário digitar um valor
	scanf("%d", &eleitores); // Registra e armazena o valor na variável "eleitores"
	
	printf("Quantos votos foram apurados?: "); // Requisita ao usuário digitar um valor
	scanf("%d", &votos); // Registra e armazena o valor na variável "votos"
	
	votos = (votos / eleitores) * 100; // Faz a conta de "(votos / eleitores) * 100" e a armazena na variável "votos"
	
	printf("Porcentagem (%%) de participacao dos eleitores: %.0f%%", votos); // Imprime na tela o valor final da conta. Funcionalidade "%.0f", define o número de casas decimais do float em 0
	return 0;
}
