#include <stdio.h>

int main(void){
	int a, b;
	
	printf("Insira dois numeros: ");
	scanf("%d" "%d", &a, &b);
	
	if(a > b){
		printf("O maior numero e %d e o menor %d", a, b);
	}else if( a < b){
		printf("O maior numero e %d e o menor %d", b, a);
	}else {
		printf("Ambos dos numeros sao iguais");
	}
	return 0;
}
