#include <stdio.h>

int main(void){
	int raio; // Cria a variável "raio"
	int altura; // Cria a variável "altura"
	float resultado; // Cria a variável "resultado"
	float resultado2; // Cria a variável "resultado2"
	const float PI = 3.14159; // Cria a constante "PI". Funcionalidade: const (constante), valor imutavel durante a execução do programa
	
	printf("Insira o raio (cm): "); // Requisita ao usuário inserir um valor
	scanf("%d", &raio); // Registra e armazena o valor na variável "raio"
	
	printf("Insira a altura (cm): "); // Requisita ao usuário digitar um valor
	scanf("%d", &altura); // Registra e armazena o valor na variável "altura"
	
	resultado = 2*PI*raio*(raio + altura); // Faz a conta "2*PI*raio*(raio + altura)" e a armazena na variável "resultado"
	resultado2 = PI*raio*raio*altura; // Faz a conta "PI*raio*raio*altura" e a armazena na variável "resultado2"
	
	printf("A area do cilindro e: %.02f e o volume e %.02f", resultado, resultado2); // Imprime na tela o resultado final da area e volume do cilindro
	return 0;
}
