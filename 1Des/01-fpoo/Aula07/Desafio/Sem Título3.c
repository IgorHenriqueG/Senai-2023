#include <stdio.h>

int main(void){
	char nome[10];
	float sis1, sis2, sis3, sis4, sis5, dia1, dia2, dia3, dia4, dia5, mediasis, mediadia;
	
	int decisao = 1;
	while (decisao){
		printf("Insira seu nome: ");
		scanf("%s", &nome);
	
		printf("Insira a media sis e dia de 1 a 5: ");
		scanf("%f %f %f %f %f %f %f %f %f %f", &sis1, &dia1, &sis2, &dia2, &sis3, &dia3, &sis4, &dia4, &sis5, &dia5);
	
		mediasis = (sis1 + sis2 + sis3 + sis4 + sis5)/5;
	
		mediadia = (dia1 + dia2 + dia3 + dia4 + dia5)/5;
	
		printf("Ola %s. \nSua media sis e: %.2f sua media dia e: %.2f \n", nome, mediasis, mediadia);
		
		printf("Voce quer continuar usando o progama?\n Digite 1 para continuar e 0 para sair: \n");
		scanf("%d", &decisao);
	}
	
	return 0;
}
