#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
	int nota1, nota2, media;
	
	printf("Digite as duas notas da disciplina: ");
	scanf("%d %d", &nota1, &nota2);
	
	media = (nota1 + nota2) / 2;
	
	printf("A média é: %d\n", media);
	
	if(media >= 6){
		printf("Você está aprovado!");
	}else{
		printf("Você foi reprovado.");
	}
	
	return 0;
}
