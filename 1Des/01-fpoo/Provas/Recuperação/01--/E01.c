#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL, "");
	int num1, num2, resultado;
	
	printf("Insira o primeiro n�mero: ");
	scanf("%d", &num1);
	
	printf("Insira o segundo n�mero: ");
	scanf("%d", &num2);
	
	resultado = num1 + num2;
	
	printf("O resultado de %d + %d �: %d", num1, num2, resultado);
	
	return 0;
}
