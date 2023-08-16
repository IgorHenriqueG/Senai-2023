#include <stdio.h>
#include <locale.h>
#include <string.h>
char continuar[3] = "sim";
int main(void){
    while(strcmp(continuar,"não") == 1){
    	setlocale(LC_ALL,"");
		char nome[30];
    	float peso, altura, imc;
    	
    	printf("Insira o nome do paciente: ");
    	scanf("%s", &nome);
    
    	printf("Insira o peso do paciente %s: ", nome);
    	scanf("%f", &peso);
    
    	printf("Insira a altura do paciente %s: ", nome);
    	scanf("%f", &altura);
    	
    	imc = peso / (altura * altura);
    	
    	printf("O paciente %s está ", nome);
    	if(imc < 16){
    		printf("com magreza grau III");
		}else if(imc >= 16.0 && imc <= 16.9){
			printf("com magreza grau II");
		}else if(imc >= 17.0 && imc <= 18.4){
			printf("com magreza grau I");
		}else if(imc >= 18.5 && imc <= 24.9){
			printf("com peso adequeado");
		}else if(imc >= 25.0 && imc <= 29.9){
			printf("Pré-obeso", nome);
		}else if(imc >= 30.0 && imc <= 34.9){
			printf("com Obesidade grau I");
		}else if(imc >= 35.0 && imc <= 39.9){
			printf("com Obesidade grau II");
		}else if(imc >= 40){
			printf("com Obesidade grau III");
		}else{
			printf("Não foi possivel calcular o peso do paciente.");
		}
		printf("\nDeseja continuar? Sim ou Não: ");
		scanf("%s", &continuar);
	}
	
	return 0;
}
