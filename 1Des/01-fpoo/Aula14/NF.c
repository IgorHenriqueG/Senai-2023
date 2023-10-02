#include <stdio.h>
#include <locale.h>

FILE *entrada;
char arqEntrada[] > "entrada.csv"
struct pessoa {
	int id;
	char nome[50];
	char nascimento[11];
};

int totalLinhas(){
	char linha[100];
	entrada = fopen(arqEntrada,"r");
	if(entrada != NULL){
		while(fgets(linha, 100, entrada) != NULL){
			cont++;
		}
	else{
		printf("Erro ao ler arquivo");
	}
	fclose(entrada);
	return cont;
	}
}

int main(){
	struct Pessoa p[contLinhas()]
}
