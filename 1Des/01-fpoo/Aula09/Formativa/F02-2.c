#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(void){
	setlocale(LC_ALL,"");
	char cidade[20];
	int numCandidatos, i;
	
	
	printf("Qual cidade a votação irá ocorrer: ");
	scanf("%s", &cidade);
	
	printf("Quantos candidatos a cidade %s possui: ", cidade);
	scanf("%d", &numCandidatos);
	
	char candidato[numCandidatos][20];
	float porcentagem[numCandidatos], votos[numCandidatos], totalVotos, brancos, nulos;
	
	for(i = 1; i <= numCandidatos; i++){
		printf("\nInsira o nome do candidato %d: ", i);
		scanf("%s", &candidato[i]);
		
		printf("Quantos votos o candidato %s teve: ", candidato[i]);
		scanf("%f", &votos[i]);
	}
	
	printf("\nQuantos votos em branco houveram: ");
	scanf("%f", &brancos);
	
	printf("Quantos votos nulos houveram: ");
	scanf("%f", &nulos);
	
	for(i = 1; i <= numCandidatos; i++){
		totalVotos += votos[i];
	}
	
	totalVotos += brancos;
		
	if(totalVotos > nulos){
		printf("\n\nVotos válidos: %.0f\nVotos Inválidos: %.0f", totalVotos, nulos);
		printf("\n\nCandidatos\tPorcentagem");
		for(i = 1; i <= numCandidatos; i++){
			porcentagem[i] = (votos[i] / totalVotos) * 100;
			printf("\n%s\t\t%.1f%%", candidato[i], porcentagem[i]);
		}
		brancos = (brancos / totalVotos) * 100;
		printf("\nBrancos\t\t%.1f%%", brancos);
		
		if(totalVotos > 200000){
			
		}	
		
	}else{
		printf("Votação inválida");
	}
	
	
	return 0;
}
