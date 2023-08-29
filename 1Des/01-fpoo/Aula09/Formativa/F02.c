#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(void){
	setlocale(LC_ALL,"Portuguese");
	char cidade[20], candidato[20][20];
	int numCandidatos, votos[20], brancos, brancosCount, nulos, totalVotos, i;
	float porcentagem[20];
	
	printf("Qual cidade a votação irá ocorrer: ");
	scanf("%s", &cidade);
	
	printf("Quantos candidatos a cidade %s possui: ", cidade);
	scanf("%d", &numCandidatos);
	
	printf("\nQuantos votos em branco houveram: ");
	scanf("%d", &brancos);
	
	brancosCount = brancos / numCandidatos;  //REMOVER
	
	printf("Quantos votos nulos houveram: ");
	scanf("%d", &nulos);
	
	for(i = 1; i <= numCandidatos; i++){
		printf("\nNome do candidato %d: ", i);
		scanf("%s", &candidato[i]);
		candidato[i] + i;
		
		printf("Quantos votos o candidato %s possui: ", candidato[i]);
		scanf("%d", &votos[i]);
		votos[i] = votos[i] + brancosCount;
		votos[i] + i;
	}
	
	for(i = 1; i <= numCandidatos; i++){
		totalVotos = totalVotos + votos[i];
		votos[i] + i;
	}
	
	printf("%d", totalVotos);
	
	for(i = 1; i <= numCandidatos; i++){
		porcentagem[i] = (votos[i] / totalVotos) * 100;
		porcentagem[i] + i;
	}
	
	
	
	
	printf("\nVotos válidos %d\nVotos inválidos %d\n\n", totalVotos, nulos);
	printf("Candidato\tPorcentagem\n");
	
	for(i = 1; i <= numCandidatos; i++){
		printf("%s\t\t%f%%\n", candidato[i], porcentagem[i]);
	}
	
	return 0;
}
