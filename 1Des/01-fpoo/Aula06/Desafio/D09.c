#include <stdio.h>

int main(void){
	int i;
	while(i != 4){
		printf("Digite um numero: ");
		scanf("%d", &i);
		printf("O quadrado do numero digitado e %d\n", i*i);
	}
	return 0;
}
