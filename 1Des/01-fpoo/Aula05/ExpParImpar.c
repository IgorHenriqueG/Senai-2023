#include <stdio.h>

int main(void){
	int a, b;
	
	printf("Insira um numero inteiro: ");
	scanf("%d", &a);
	
	b = a % 2;
	
	printf("O resto e: %d\n", b);
	
	if(b) printf("Impar");
	else printf("Par");
	
	return 0;
}
