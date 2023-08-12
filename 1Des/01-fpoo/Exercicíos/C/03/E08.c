#include <stdio.h>

int main(void){
	int num, fat;
	
	printf("Insira um numero: ");
	scanf("%d", &num);
	
	if(num <= 0){
		printf("Somente numeros maiores que 0. ");
		return 0;
	}else{
		for(fat = 1; num > 1; num = num - 1){
			fat = fat * num;
		}	
	}	
	
	printf("%d\n", fat);
	return 0;
}
