#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL, "");
	int num1, num2, num3, resultado;
	
	printf("Insira o primeiro n�mero: ");
	scanf("%d", &num1);
	
	printf("Insira o segundo n�mero: ");
	scanf("%d", &num2);
	
	printf("Insira o segundo n�mero: ");
	scanf("%d", &num3);
	
	resultado = (num1 + num2 + num3) / 3;
	
	printf("A m�dia de %d %d %d �: %d", num1, num2, num3, resultado);
	
	return 0;
}
