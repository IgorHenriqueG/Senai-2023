#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

int geraVetor(int valorProcurado, int rodou){
	int vetor[10], posicao = -1, i;
	char continuar[3] = "sim";
	
	printf("\nDeseja fazer uma nova busca pelo número %d? (Sim ou Não): ", valorProcurado);
	scanf("%s", &continuar);
	
	if(strcmp(continuar,"não") == 1){
		system("cls");
		rodou = rodou + 1;
	    printf("O programa rodou %d\n", rodou);
		printf("\nGerando um novo vetor para a procura");
		for(i = 0; i < 10; i++) {
	        vetor[i] = rand() % 101;
	    }
	    
	    printf("\nVetor gerado para verificação: \n");
	    printf("Casa:\tNúmero:\n");
	    for(i = 0; i < 10; i++){
	    	printf("%d\t%d\n", i + 1, vetor[i]);
		}
	    
	    for(i = 0; i < 10; i++) {
	        if (vetor[i] == valorProcurado) {
	            posicao = i + 1;
	            break;
	        }
	    }
	    
	    if(posicao != -1) {
	        printf("\033[1;32mO valor %d está na posição %d do vetor.\n\033[0m\n", valorProcurado, posicao);
	    }else{
	        printf("\033[1;31mO valor %d não foi encontrado no vetor.\033[0m\n", valorProcurado);
	        geraVetor(valorProcurado, rodou);
	    }
	}else{
		return 0;
	}
	
}

int main(){
    srand(time(NULL));
	setlocale(LC_ALL,"");
	int vetor[10], valorProcurado, posicao = -1, i;
	
    
    printf("Gerando um novo vetor para a procura");
	for(i = 0; i < 10; i++) {
        vetor[i] = rand() % 101;
    }
    
    printf("\nVetor gerado para verificação: \n");
    printf("Casa:\tNúmero:\n");
    for(i = 0; i < 10; i++){
    	printf("%d\t%d\n", i + 1, vetor[i]);
	}
    
    printf("\nDigite um valor para ser localizado no vetor: ");
    scanf("%d", &valorProcurado);
    
    for(i = 0; i < 10; i++) {
        if (vetor[i] == valorProcurado) {
            posicao = i + 1;
            break;
        }
    }

    if(posicao != -1) {
        printf("O valor %d está na posição %d do vetor.\n", valorProcurado, posicao);
    }else{
        printf("O valor %d não foi encontrado no vetor.\n", valorProcurado);
        geraVetor(valorProcurado, 0);
    }

    return 0;
}
