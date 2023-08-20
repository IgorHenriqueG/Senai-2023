#include <stdio.h>

int main(void){
	int num1, num2, num3, num4, num5, i, temp;
	
	printf("Insira 5 numeros: ");
	scanf("%d %d %d %d %d", &num1, &num2, &num3, &num4, &num5);
	
	for(i = 0; i < 100; i++){
		if (num1 > num2){
			temp = num1;
			num1 = num2;
			num2 = temp;
		}
		if (num2 > num3){
			temp = num2;
			num2 = num3;
			num3 = temp;
		}
		if (num3 > num4){
			temp = num3;
			num3 = num4;
			num4 = temp;
		}
		if (num4 > num5){
			temp = num4;
			num4 = num5;
			num5 = temp;
		}
	}
	
	printf("%d\n%d\n%d\n%d\n%d", num1, num2, num3, num4, num5);
	return 0;
}
