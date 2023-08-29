#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(void){
	setlocale(LC_ALL,"Portuguese");
	char cidade[20], candidato[20][20];
	int numCandidatos, brancos, nulos, i;
	float porcentagem[20], votos[20], totalVotos;
	
	printf("Qual cidade a votação irá ocorrer: ");
	scanf("%s", &cidade);
	
	printf("Quantos candidatos a cidade %s possui: ", cidade);
	scanf("%d", &numCandidatos);
	
	for(i = 1; i <= numCandidatos; i++){
		printf("\nNome do candidato %d: ", i);
		scanf("%s", &candidato[i]);
		
		printf("Quantos votos o candidato %s possui: ", candidato[i]);
		scanf("%d", &votos[i]);
		
		totalVotos = totalVotos + votos[i];
	}
	
	printf("\nQuantos votos em branco houveram: ");
	scanf("%d", &brancos);
	
	
	printf("Quantos votos nulos houveram: ");
	scanf("%d", &nulos);
	
	for(i = 1; i <= numCandidatos; i++){
		porcentagem[i] = (votos[i] / totalVotos) * 100;
	}
	
	printf("\nVotos válidos %d\nVotos inválidos %d\n\n", totalVotos, nulos);
	printf("Candidato\tPorcentagem\n");
	
	for(i = 1; i <= numCandidatos; i++){
		printf("%s\t\t%.1f%%\n", candidato[i], porcentagem[i]);
	}
	
	return 0;
}
