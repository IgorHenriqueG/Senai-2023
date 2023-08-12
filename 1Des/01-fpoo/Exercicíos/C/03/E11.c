#include <stdio.h>

int main(void){
	int num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, i, temp;
	
	printf("Insira 10 numeros: ");
	scanf("%d %d %d %d %d %d %d %d %d %d", &num1, &num2, &num3, &num4, &num5, &num6, &num7, &num8, &num9, &num10);
	
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
		if (num5 > num6){
			temp = num5;
			num5 = num6;
			num6 = temp;
		}
		if (num6 > num7){
			temp = num6;
			num6 = num7;
			num7 = temp;
		}
		if (num7 > num8){
			temp = num7;
			num7 = num8;
			num8 = temp;
		}
		if (num8 > num9){
			temp = num8;
			num8 = num9;
			num9 = temp;
		}
		if (num9 > num10){
			temp = num9;
			num9 = num10;
			num10 = temp;
		}
	}
	
	printf("%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n", num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);
	return 0;
}
