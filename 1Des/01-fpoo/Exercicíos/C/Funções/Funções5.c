#include <stdio.h>
#include <locale.h>

void mostrar(int vetor[], int n){
	int i;
	printf("Indice\tValor\n");
	for(i = 0; i < n; i++){
		printf("%d\t[%d]\n", i, vetor[i]);
	}
}

int buscar(int *vetor, int n, int valor){
	int i, posicao = -1;
	
	for(i = 0; i < n; i++){
		if(valor == vetor[i]){
			posicao = i;
			break;
		}
	}
	
	return posicao;
}

int main(void){
	setlocale(LC_ALL, "");
	int range[] = {16, 15, 24, 32, 45, 0, 3, 8, 7};
	int n = sizeof(range) / sizeof(range[0]);
	mostrar(range, n);
	int valor;
	printf("Digite o valor a ser buscado: ");
	scanf("%d", &valor);
	int resultado = buscar(range, n, valor);
	if(resultado == -1){
		printf("Valor não encontrado!");
	}else{
		printf("O valor foi encontrado na posição %d", resultado);
	}
	return 0;
}
