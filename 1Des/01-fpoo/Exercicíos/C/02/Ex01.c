#include <stdio.h>

int main(void){
	int preco;
	
	printf("Entre o preco do produto: ");
	scanf("%d", &preco);
	
	if(preco > 1000){
		preco = preco * 0.95;
		printf("O preco do produto com desconto de 5%% e de %d", preco);
		return 0;
	} else{
		printf("O preco do produto nao sofreu alteracoes.");
	}
	return 0;
}
