#include <stdio.h>

int main(void){
	float eleitores; // Cria a vari�vel "eleitores"
	float votos; // Cria a vari�vel "votos"
	
	printf("Quantos eleitores tem na cidade?: "); // Requisita ao usu�rio digitar um valor
	scanf("%d", &eleitores); // Registra e armazena o valor na vari�vel "eleitores"
	
	printf("Quantos votos foram apurados?: "); // Requisita ao usu�rio digitar um valor
	scanf("%d", &votos); // Registra e armazena o valor na vari�vel "votos"
	
	votos = (votos / eleitores) * 100; // Faz a conta de "(votos / eleitores) * 100" e a armazena na vari�vel "votos"
	
	printf("Porcentagem (%%) de participacao dos eleitores: %.0f%%", votos); // Imprime na tela o valor final da conta. Funcionalidade "%.0f", define o n�mero de casas decimais do float em 0
	return 0;
}
