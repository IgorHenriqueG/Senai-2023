#include <stdio.h>
#include <locale.h>

int busca(vec[], procura){
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
    }
}

int main(void){
	setlocale(LC_ALL,"");
	int vetor[10], valorProcurado, posicao = -1, n, i;
	
	printf("Insira o tamanho do vetor que deseja: ");
	scanf("%d", &n);
	
	int vec[n];
	
	for(i = 0; i < n; i++){
		printf("\nInsira o numero %d do vetor: ", i);
		scanf("%d", &vec[i]);	
	}
	
    printf("\nDigite um valor para ser localizado no vetor: ");
    scanf("%d", &valorProcurado);
    
    busca(vec[], valorProcurado);


    return 0;
}
