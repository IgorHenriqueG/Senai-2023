#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
	int distancia, horas, velocidade;
	
	printf("Qual a distancia entre as cidades: ");
	scanf("%d", &distancia);
	
	printf("\nQuantas horas demorou para percorrer o percurso: ");
	scanf("%d", &horas);
	
	velocidade = distancia / horas;
	
	printf("\nA média de velocidade é: %d", velocidade);
	return 0;
	
}
