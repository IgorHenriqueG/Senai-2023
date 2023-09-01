#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
	int produtos, i;
	char nomeProduto[20][20];
	float custo[20], lucro;
	
	printf("Quantos produtos foram comprados: ");
	scanf("%d", &produtos);
	
	for(i = 1; i <= produtos; i++){
		printf("\nNome do produto %d: ", i);
		scanf("%s", &nomeProduto[i]);
		
		printf("Preço do produto %s: ", nomeProduto[i]);
		scanf("%f", &custo[i]);
	}
	
	printf("\nQual a margem/porcentagem de lucro a aplicar: ");
	scanf("%f", &lucro);
	
	lucro = lucro / 100;
	
	for(i = 1; i <= produtos; i++){
		custo[i] = custo[i] + (custo[i] * lucro);
		printf("\n%s %.2f", nomeProduto[i], custo[i]);
	}
	return 0;
}
