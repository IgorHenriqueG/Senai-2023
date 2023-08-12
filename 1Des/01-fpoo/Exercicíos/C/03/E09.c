#include <stdio.h>

int main(void){
	int num, x;
	
	printf("Insira um numero: ");
	scanf("%d", &num);
	
	for(x = 1; x <= 10; x++){
		printf("%dx%d = %d\n", num, x, num * x);
	}
	
	
	return 0;
}
