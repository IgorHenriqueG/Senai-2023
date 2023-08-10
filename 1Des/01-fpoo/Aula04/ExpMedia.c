#include <stdio.h>

int main(void){
	int media;
	
	printf("Digite a media final do aluno de 0 a 100: ");
	scanf("%d", &media);
	
	if(media >= 50){
		printf("Aprovado");
	} if(media < 20){
		printf("Reprovado");
	}else{
			printf("Recuperacao");
	}
			
		
		
	
	return 0;
}
