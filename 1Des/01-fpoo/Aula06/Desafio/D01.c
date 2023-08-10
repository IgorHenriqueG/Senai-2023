#include <stdio.h>

int main(void){
	int i = 0;
	do{
		printf("Uma frase %d vezes\n", i);
		i++;
	}while(i <= 1000);
	return 0;
}
