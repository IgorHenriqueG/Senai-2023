#include <stdio.h>

int main(void){
	printf("O produto");
	printf("Leia um valor: ");
	int valor;
	scanf("%d", &valor);
	if(valor >= 1000){
		valor = valor * 0.92;
		printf("descinto de 8%% %d", valor);
		
	}else {
		printf("valor nao alterado");
	}
	return 0;
}
