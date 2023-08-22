#include <stdio.h>

int main(void){
	int num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, i, temp;
	
	printf("Insira 10 numeros: ");
	scanf("%d %d %d %d %d %d %d %d %d %d", &num1, &num2, &num3, &num4, &num5, &num6, &num7, &num8, &num9, &num10);
	
	while(num1 > num2 && num2 > num3 && num3 > num4 && num4 > num5 && num5 > num6 && num6 > num7 && num7 > num8 && num8 > num9 && num9 > num10 && num10 > num1){
			temp = num1;
			num1 = num2;
			num2 = temp;
			temp = num2;
			num2 = num3;
			num3 = temp;
			temp = num3;
			num3 = num4;
			num4 = temp;
			temp = num4;
			num4 = num5;
			num5 = temp;
			temp = num5;
			num5 = num6;
			num6 = temp;
			temp = num6;
			num6 = num7;
			num7 = temp;
			temp = num7;
			num7 = num8;
			num8 = temp;
			temp = num8;
			num8 = num9;
			num9 = temp;
			temp = num9;
			num9 = num10;
			num10 = temp;
	}
	
	printf("%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n", num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);
	return 0;
}
