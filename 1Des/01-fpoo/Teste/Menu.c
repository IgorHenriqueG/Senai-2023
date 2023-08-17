#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(void){
	setlocale(LC_ALL,"");
	int menu = 1, escolha;
	while(menu == 1){
		char continuar[3] = "sim";
		int menu = 1, escolha;
		system("cls"); 
		printf("\n");
		printf("\t\tMenu\n");
		printf("\t====================\n");
		printf("\t 1. Calculadora IMC\n\t 2. Média de pressão\n\t 3. Sair");
		printf("\n\t====================\n");
		printf("\n\tInsira qual opção deseja: ");
		scanf("%d", &escolha);
		if(escolha == 3){
			system("cls");
			return 0;
		}
		
		while(escolha == 1 && strcmp(continuar,"não") == 1){
			char nome[30];
			float peso, altura, imc;
			system("cls"); 
			printf("\n\tCalculadora IMC");
			printf("\n\nDigite voltar para retornar ao menu");
			printf("\n\nInsira o nome do paciente: ");
			scanf("%s", &nome);
			if(strcmp(nome,"voltar") == 0){
				printf("TESE");
				break;
			}
			
			printf("Insira o peso do paciente %s: ", nome);
			scanf("%f", &peso);
			
			printf("Insira a altura do paciente %s: ", nome);
			scanf("%f", &altura);
			
			imc = peso / (altura * altura);
			
			printf("\nO paciente %s está ", nome);
			if(imc < 16){
				printf("com magreza grau III");
			}else if(imc >= 16.0 && imc <= 16.9){
				printf("com magreza grau II");
			}else if(imc >= 17.0 && imc <= 18.4){
				printf("com magreza grau I");
			}else if(imc >= 18.5 && imc <= 24.9){
				printf("com peso Adequado");
			}else if(imc >= 25.0 && imc <= 29.9){
				printf("pré-obeso");
			}else if(imc >= 30.0 && imc <= 34.9){
				printf("obesidade grau I");
			}else if(imc >= 35.0 && imc <= 39.0){
				printf("obesidade grau II");
			}else if(imc >= 40){
				printf("obesidade grau III");
			}else {
				printf("Erro ao calcular IMC.");
			}
			printf("\n\nDeseja continuar? Sim ou Não: ");
			scanf("%s", &continuar);
		}
		
		while(escolha == 2 && strcmp(continuar,"não") == 1){
			char nome[30];
			int dias, i;
			int diasM[100];
			float mediasis, mediadia, sis, dia;
			system("cls");
			printf("\n\tMédia de pressão");
			printf("\n\nDigite voltar para retornar ao menu");
			printf("\n\nInsira o nome do paciente: ");
			scanf("%s", &nome);
			if(strcmp(nome,"voltar") == 0){
				printf("TESE");
				break;
			}
			
			printf("Insira quantos dias foram anotados: ");
			scanf("%d", &dias);
			
			for(i = 0; i < dias; i++){
				diasM[i] = i+1;
				printf("Insira a medição sis e dia do dia %d: ", diasM[i]);
				scanf("%f %f", &sis, &dia);
				
				mediasis += sis;
				mediadia += dia;
			}
			
			mediasis /= dias;
			mediadia /= dias;
			
			printf("\nA média do paciente %s é:\n\nSis: %.1f\nDia: %.1f", nome, mediasis, mediadia);
			
			printf("\n\nDeseja continuar? Sim ou Não: ");
			scanf("%s", &continuar);
		}
		
	}
	
	return 0;
}
