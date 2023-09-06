#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
	char nome[5][20];
	int nota[5], i, media[5];
	
	for(i = 0; i < 5; i++){
		printf("\n\nInsira o nome do %d aluno: ", i+1);
		scanf("%s", &nome[i]);
		
		do{
			printf("\nInsira a primeira nota do aluno %s: ", nome[i]);
			scanf("%d", &nota[i]);	
		}while(nota [i] < 0 || nota[i] > 10);
		
		do{
			printf("\nInsira a segunda nota do aluno %s: ", nome[i]);
		scanf("%d", &nota[i + 1]);	
		}while(nota [i + 1] < 0 || nota[i + 1] > 10);
		
		media[i] = (nota[i] + nota[i + 1]) / 2;
	}
	
	for(i = 0; i < 5; i++){
		if(media[i] >= 5){
			printf("\n%s %d Aprovado!", nome[i], media[i]);
		}else{
			printf("\n%s %d Reprovado!", nome[i], media[i]);	
		}
	}
	
	return 0;
}
