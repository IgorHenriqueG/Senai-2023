#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(void){
	setlocale(LC_ALL,"Portuguese");
	int doadores, idade[20], dias[20], i;
	char nome[20][20], sexo[20][20];
	
		
	printf("Número total de doadores: ");
	scanf("%d", &doadores);
	
	for(i = 1; i <= doadores; i++){
		printf("\nInsira o nome do doador %d: ", i);
		scanf("%s", &nome[i]);
		nome[i] + i;
		
		printf("Insira a idade do doador %s: ", nome[i]);
		scanf("%d", &idade[i]);
		idade[i] + i;
		
		printf("Insira o sexo do doador %s (M ou F): ", nome[i]);
		scanf("%s", &sexo[i]);
		sexo[i] + i;
		
		printf("Dias desde a ultima doação de %s: ", nome[i]);
		scanf("%d", &dias[i]);
		dias[i] + i;
	}
	for(i = 1; i <= doadores; i++){
		if(strcmp(sexo[i],"m") == 0){
			if(dias[i] > 60 && (idade[i] > 16 && idade[i] < 69)){
				printf("\n%s %d %s %d APTO", nome[i], idade[i], sexo[i], dias[i]);	
			}else{
				printf("\n%s %d %s %d INAPTO", nome[i], idade[i], sexo[i], dias[i]);	
			}
			
		}
		
		if(strcmp(sexo[i],"f") == 0){
			if(dias[i] > 90 && (idade[i] > 16 && idade[i] < 69)){
				printf("\n%s %d %s %d APTO", nome[i], idade[i], sexo[i], dias[i]);	
			}else{
				printf("\n%s %d %s %d INAPTO", nome[i], idade[i], sexo[i], dias[i]);	
			}
		}
	}
	
	return 0;
}
