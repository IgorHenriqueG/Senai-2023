#include <stdio.h>

int main(void){
	int raio; // Cria a vari�vel "raio"
	int altura; // Cria a vari�vel "altura"
	float resultado; // Cria a vari�vel "resultado"
	float resultado2; // Cria a vari�vel "resultado2"
	const float PI = 3.14159; // Cria a constante "PI". Funcionalidade: const (constante), valor imutavel durante a execu��o do programa
	
	printf("Insira o raio (cm): "); // Requisita ao usu�rio inserir um valor
	scanf("%d", &raio); // Registra e armazena o valor na vari�vel "raio"
	
	printf("Insira a altura (cm): "); // Requisita ao usu�rio digitar um valor
	scanf("%d", &altura); // Registra e armazena o valor na vari�vel "altura"
	
	resultado = 2*PI*raio*(raio + altura); // Faz a conta "2*PI*raio*(raio + altura)" e a armazena na vari�vel "resultado"
	resultado2 = PI*raio*raio*altura; // Faz a conta "PI*raio*raio*altura" e a armazena na vari�vel "resultado2"
	
	printf("A area do cilindro e: %.02f e o volume e %.02f", resultado, resultado2); // Imprime na tela o resultado final da area e volume do cilindro
	return 0;
}
