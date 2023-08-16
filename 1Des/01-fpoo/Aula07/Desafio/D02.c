#include <stdio.h>
#include <locale.h>
#define MAX 30

int main(void)
{
	setlocale(LC_ALL,"");
    char nome[30];
    float peso, altura, imc;
 
    printf("Insira o nome do paciente: \n");
    scanf("%s", &nome);
    
    printf("Insira o peso do paciente %s: \n", nome);
    scanf("%f", &peso);
    
    printf("Insira a altura do paciente %s: \n", nome);
    scanf("%f", &altura);
    
    imc = peso / (altura * altura);
    
    if(imc < 16){
    	printf("O paciente %s está com magreza grau III", nome);
	}else if(imc >= 16.0 && imc <= 16.9){
		printf("O paciente %s está com magreza grau II", nome);
	}else if(imc >= 17.0 && imc <= 18.4){
		printf("O paciente %s está com magreza grau I", nome);
	}else if(imc >= 18.5 && imc <= 24.9){
		printf("O paciente %s está com peso adequeado", nome);
	}else if(imc >= 25. && imc <= 29.9){
		printf("O paciente %s está Pré-obeso", nome);
	}else if(imc >= 30.0 && imc <= 34.9){
		printf("O paciente %s está com Obesidade grau I", nome);
	}else if(imc >= 35.0 && imc <= 39.9){
		printf("O paciente %s está com Obesidade grau II", nome);
	}else if(imc >= 40){
		printf("O paciente %s está com Obesidade grau III", nome);
	}else{
		printf("Não foi possivel calcular o peso do paciente.");
	}
 
    return 0;
}
