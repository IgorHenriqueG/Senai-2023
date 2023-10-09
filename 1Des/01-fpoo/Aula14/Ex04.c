#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
#define SIZE 10

// PILHA

int pilha[SIZE];
int ponteiro = 0;
int i;

void mostraPilha(){
	printf("Pilha:\n");
	for(i = 0; i < ponteiro; i++)
		printf("%d\n", pilha[i]);
}
int pushPilha(int dado){
	if(ponteiro < SIZE){
		pilha[ponteiro] = dado;
		ponteiro++;
		return 1;
	} 
	else return 0;
}
int popPilha(){
	if(ponteiro >= 0){
		ponteiro--;
		return 1;
	}else
		return 0;
}

// FILA

int fila[SIZE];
int inicioFila = 0;
int fimFila = 0;

void mostraFila(){
    printf("Fila:\n");
    for(i = inicioFila; i < fimFila; i++){
    	printf("%d\n", fila[i]);
	}   
}

int pushFila(int dado){
    if(fimFila < SIZE){
        fila[fimFila] = dado;
        fimFila++;
        return 1;
    }else{
    	return 0;
	}
}

int popFila(){
    if(inicioFila < fimFila){
        inicioFila++;
        return 1;
    }else{
    	return 0;
	}   
}

// LISTA

struct Lista{
    int dado;
    struct Lista *prox;
};
struct Lista *inicio = NULL;
struct Lista *fim = NULL;
struct Lista *aux = NULL;

void mostraLista(){
	int i = 0;
    aux = inicio;
    printf("Lista:\n");
    while(aux != NULL){
        printf("[%d] %d\n", i, aux->dado);
        i++;
        aux = aux->prox;
    }
}

int pushLista(int dado){
    aux = (struct Lista*) malloc(sizeof(struct Lista));
    if(aux == NULL) return 0;
    aux->dado = dado;
    aux->prox = NULL;
    if(inicio == NULL){
        inicio = aux;
        fim = aux;
    }else{
        fim->prox = aux;
        fim = aux;
    }
    return 1;
}

int popLista(){
    if(inicio != NULL){
        aux = inicio;
        inicio = inicio->prox;
        free(aux);
        return 1;
    }else
        return 0;
}

int slice(int index){
    int i;
    aux = inicio;
    if(index == 0){
        inicio = inicio->prox;
        free(aux);
        return 1;
    }else{
        for(i = 0; i < index-1; i++){
            aux = aux->prox;
        }
        struct Lista *aux2 = aux->prox;
        aux->prox = aux2->prox;
        free(aux2);
        return 1;
    }
    return 0;
}

// MAIN

int main(){
	setlocale(LC_ALL, "");

    int opcao, num;

    while(1){
		printf("|======================|\n");	
        printf("|Digite 1 para Pilha   |\n|Digite 2 para Fila    |\n|Digite 3 para Lista   |\n|Digite 0 para encerrar|\n");
        printf("|======================|\n");
		printf("Insira a opção desejada: ")	;
        scanf("%d", &opcao);
		system("cls");

        if(opcao == 1){
        	while(1){
        		printf("|===============================|\n");	
		        printf("|Digite 1 para Inserir um número|\n|Digite 2 para Remover um número|\n|Digite 0 para encerrar		|\n");
		        printf("|===============================|\n");
		        printf("PILHA\n");
				printf("Insira a opção desejada: ")	;
		        scanf("%d", &opcao);
        		
        		if(opcao == 1){
		            printf("\nDigite um número:");
		            scanf("%d", &num);
		            printf("\n");
		            pushPilha(num);
		            system("cls");
		            mostraPilha();
		            printf("\n");
		        }else if(opcao == 2){
		            popPilha();
		            system("cls");
		            mostraPilha();
		            printf("\n");
		        }else{
		            system("cls");
		            break;
		        }
			}
        }else if(opcao == 2){
        	while(1){
        		printf("|===============================|\n");	
		        printf("|Digite 1 para Inserir um número|\n|Digite 2 para Remover um número|\n|Digite 0 para encerrar		|\n");
		        printf("|===============================|\n");
		        printf("FILA\n");
				printf("Insira a opção desejada: ")	;
		        scanf("%d", &opcao);
        		
        		if(opcao == 1){
		            printf("\nDigite um número:");
		            scanf("%d", &num);
		            printf("\n");
		            pushFila(num);
		            system("cls");
		            mostraFila();
		            printf("\n");
		        }else if(opcao == 2){
		            popFila();
		            system("cls");
		            mostraFila();
		            printf("\n");
		        }else{
		            system("cls");
		            break;
		        }
			}
		}else if(opcao == 3){
			while(1){
				printf("|===============================|\n");	
			    printf("|Digite 1 para Inserir um número|\n|Digite 2 para Remover um número|\n|Digite 3 para Remover um indéx |\n|Digite 0 para encerrar		|\n");
			    printf("|===============================|\n");
			    printf("LISTA\n");
				printf("Insira a opção desejada: ")	;
			    scanf("%d", &opcao);
				
				if(opcao == 1){
		            printf("\nDigite um número:");
		            scanf("%d", &num);
		            printf("\n");
		            pushLista(num);
		            system("cls");
		            mostraLista();
		            printf("\n");
		        }else if(opcao == 2){
		            popLista();
		            system("cls");
		            mostraLista();
		            printf("\n");
		        }else if(opcao == 3){
		        	printf("\nDigite a posição index do número desejado:");
		            scanf("%d", &num);
		            printf("\n");
		            slice(num);
		            system("cls");
		            mostraLista();
		            printf("\n");
				}else{
					system("cls");
		            break;
		        }
			}
		}else{
			system("cls");
			printf("Programa Finalizado.");
			break;
		}
    }
    return 0;
}
