#include <stdio.h>
#include <locale.h>

int calc(int n){
	int nota[n], resultado, i, temp;
	for(i = 0; i < n; i++){
		printf("Insira a nota %d: ", i + 1);
		scanf("%d", &nota[i]);
		
		resultado = resultado + nota[i];	
	}
	
	resultado = resultado / n;
	printf("A média das notas é: %d", resultado);
	return 0;
}

int main(void){
	setlocale(LC_ALL,"");
	int a, b, n;
	
	printf("Quantas notas deseja inserir: ");
	scanf("%d", &n);
	
	calc(n);
	
	return 0;
}
