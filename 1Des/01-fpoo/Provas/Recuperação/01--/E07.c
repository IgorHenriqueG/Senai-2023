#include <stdio.h>

int main(void){
	int raio, altura;
	float resultado, resultado2;
	const float PI = 3.14159;
	
	printf("Insira o raio (cm): ");
	scanf("%d", &raio);
	
	printf("Insira a altura (cm): ");
	scanf("%d", &altura);
	
	resultado = 2*PI*raio*(raio + altura);
	resultado2 = PI*raio*raio*altura;
	
	printf("A area do cilindro e: %.02f e o volume e %.02f", resultado, resultado2);
	return 0;
}
