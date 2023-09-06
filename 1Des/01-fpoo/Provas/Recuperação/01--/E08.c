#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(void){
	setlocale(LC_ALL,"");
	char nome[5][20], nomeMaisVelho[20];
	int idade[5], i, maisVelho = 0;
	
	for(i = 0; i < 5; i++){
		printf("\n\nInsira o nome da pessoa %d: ", i+1);
		scanf("%s", &nome[i]);
		
		printf("\nInsira a idade do(a) %s: ", nome[i]);
		scanf("%d", &idade[i]);
	}
	
	for(i = 0; i < 5; i++){
		if(idade[i] > maisVelho){
			maisVelho = idade[i];
			strcpy(nomeMaisVelho, nome[i]);
		}
	}
	
	printf("\nO mais velho é %s com %d anos", nomeMaisVelho, maisVelho);
	return 0;
}
