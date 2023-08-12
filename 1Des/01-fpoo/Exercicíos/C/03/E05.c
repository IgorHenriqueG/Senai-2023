#include <stdio.h>

int main(void){
	int num, i;
	
	printf("Insira um numero: ");
	scanf("%d", &num);
	
	for(i = 0; i <= num; i+=2){
		printf("%d\n", i);
	}
	return 0;
}
