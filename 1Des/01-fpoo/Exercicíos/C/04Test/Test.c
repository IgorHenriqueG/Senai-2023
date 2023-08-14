#include <stdio.h>
int main(void){
	char nome[10];
	float sis, dia, mediasis, mediadia, dias;
	float decisao = 1;
	while(decisao){
		mediasis = 0;
		mediadia = 0;
		printf("Insira seu nome: ");
		scanf("%s", &nome);
		printf("digite o numero de dias: ");
		scanf("%f", &dias);
	int i;
	for(i = 0; i<dias; i++){
		printf("Insira a media sis e dia: ");
		scanf("%f", &sis);
		scanf("%f", &dia);
		
		mediasis += sis;
		mediadia += dia;
	}
		mediasis /= dias;
		mediadia /= dias;

		printf("Ola %s. \nSua media sis e: %.2f sua media dia e: %.2f \n", nome, mediasis, mediadia);
		
		printf("Voce quer continuar usando o progama?\n Digite 1 para continuar e 0 para sair: \n");
		scanf("%d", &decisao);
		}
	
	return 0;
}
