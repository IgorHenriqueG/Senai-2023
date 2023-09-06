#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL, "");
	int num1, num2, resultado;
	
	printf("Insira o primeiro número: ");
	scanf("%d", &num1);
	
	printf("Insira o segundo número: ");
	scanf("%d", &num2);
	
	resultado = num1 + num2;
	
	printf("O resultado de %d + %d é: %d", num1, num2, resultado);
	
	return 0;
}
