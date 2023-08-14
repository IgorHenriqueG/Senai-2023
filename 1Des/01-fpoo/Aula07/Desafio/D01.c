#include <stdio.h>

int main(void){
	char nome[10];
	float sis1, sis2, sis3, sis4, sis5, dia1, dia2, dia3, dia4, dia5, mediasis, mediadia;
	
	printf("Insira seu nome: ");
	scanf("%s", &nome);
	
	printf("Insira a media sis de 1 a 5: ");
	scanf("%f %f %f %f %f", &sis1, &sis2, &sis3, &sis4, &sis5);
	
	printf("Insira a media dia: ");
	scanf("%f %f %f %f %f", &dia1, &dia2, &dia3, &dia4, &dia5);
	
	mediasis = (sis1 + sis2 + sis3 + sis4 + sis5)/5;
	mediadia = (dia1 + dia2 + dia3 + dia4 + dia5)/5;
	
	printf("Ola %s. \n sua media sis e: %.2f \n sua media dia e: %.2f", nome, mediasis, mediadia);
	
	return 0;
}
