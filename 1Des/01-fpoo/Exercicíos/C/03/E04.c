#include <stdio.h>

int main(void){
	int num, num2;
	
	printf("Insira dois numeros: ");
	scanf("%d" "%d", &num2, &num);
	
	if(num2 < num){
		for(num2 = num2; num2 <= num; num2++){
			printf("%d\n", num2);
		}
	}else if(num < num2){
		for(num = num; num <= num2; num++){
			printf("%d\n", num);
		}
	}
	return 0;
}
