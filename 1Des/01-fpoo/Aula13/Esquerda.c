#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Criando dados enumerado "enum".
enum Direcao { NORTE, LESTE, SUL, OESTE };

int main(void){
	// Abrindo o arquivo com o ponteiro "*entrada" com permição de leitura.
    FILE *entrada = fopen("esquerda.in", "r");
    FILE *saida = fopen("esquerda.out", "w");
    // criando o arquivo com o ponteiro "*saida" com permição de escrita.

    int N, i;
    char comandos[1001];

	// Enquanto N for maior que 0.
    while(1){
    	// Lê os números no "esqueda.in".
        fscanf(entrada, "%d", &N);
        if(N == 0){
        	printf("Programa finalizado!");
        	break;
		}
		// Lê os comandos no "esquerda.in".
        fscanf(entrada, "%s", comandos);
        
		// Atribuindo um valor do enum.
        int direcaoAtual = NORTE;

        for(i = 0; i < N; i++){
            if (comandos[i] == 'E') {
                // Gira à esquerda.
                // "%4" Garante que as direções fiquem entre 0 e 3.
                direcaoAtual = (direcaoAtual + 3) % 4;
            }else{
                // Gira à direita.
                direcaoAtual = (direcaoAtual + 1) % 4;
            }
        }

        char direcaoFinal;
        switch(direcaoAtual){
            case NORTE:
                direcaoFinal = 'N';
                break;
            case LESTE:
                direcaoFinal = 'L';
                break;
            case SUL:
                direcaoFinal = 'S';
                break;
            case OESTE:
                direcaoFinal = 'O';
                break;
        }

        fprintf(saida, "%c\n", direcaoFinal);
    }

    fclose(entrada);
    fclose(saida);

    return 0;
}

