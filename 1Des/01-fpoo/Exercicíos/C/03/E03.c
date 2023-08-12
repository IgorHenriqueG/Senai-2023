#include <stdio.h>

int main(void){
	int num, i;
	
	printf("Digita um numero: ");
	scanf("%d", &num);
	
	for(i = 0; i <= num; i++){
		printf("%d\n", i);
	}
	return 0;
}
