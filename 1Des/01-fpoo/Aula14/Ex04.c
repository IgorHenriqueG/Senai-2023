#include <stdio.h>
#define SIZE 10
int pilha[SIZE];
int ponteiro = 0;
int i;

// PILHA
void mostraPilha(){
	printf("Pilha:\n");
	for(i = 0; i < ponteiro; i++)
		printf("%d\n", pilha[i]);
}
int push(int dado){
	if(ponteiro < SIZE){
		pilha[ponteiro] = dado;
		ponteiro++;
		return 1;
	} 
	else return 0;
}
int pop(){
	if(ponteiro >= 0){
		ponteiro--;
		return 1;
	}else
		return 0;
}
int main(){
	setlocale(LC_ALL, "");

    int opcao, num;

    while(1){

        printf("Digite 1 para Pilha\nDigite 2 para Fila\nDigite 3 para Lista\nDigite 0 para encerrar\n");
        scanf("%d", &opcao);

        printf("------------------------------------------\n");

        if(opcao == 1){
            printf("\nDigite um número:");
            scanf("%d", &num);
            printf("\n");
            push(num);
            mostraLista();
            printf("\n");
        }else if(opcao == 2){
            pop();
            mostraLista();
            printf("\n");
        }else if(opcao == 3){
        	printf("\nDigite a posição index do número desejado:");
            scanf("%d", &num);
            printf("\n");
            slice(num);
            mostraLista();
            printf("\n");
		}else{
            printf("\nPrograma encerrado!");
            break;
        }
    }
    return 0;
}
