#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL, "");
	int num1, num2, num3, resultado;
	
	printf("Insira o primeiro número: ");
	scanf("%d", &num1);
	
	printf("Insira o segundo número: ");
	scanf("%d", &num2);
	
	printf("Insira o segundo número: ");
	scanf("%d", &num3);
	
	resultado = (num1 + num2 + num3) / 3;
	
	printf("A média de %d %d %d é: %d", num1, num2, num3, resultado);
	
	return 0;
}
