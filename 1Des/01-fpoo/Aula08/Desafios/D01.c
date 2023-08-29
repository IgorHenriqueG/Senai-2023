#include <stdio.h>

int main(void){
	char nome[20];
	int montante, i, vec[5], vec2[5], total, total2;
	
	printf("Insira o nome do vendedor: ");
	scanf("%s", &nome);
	
	for(i = 1; i <= 5; i++){
		printf("Insira o preco %d: ", i);
		scanf("%d", &montante);
		
		vec2[i] = + i;
		vec2[i] = montante;
		
		if(montante > 4000){
			montante = montante * 0.06;
		}else{
			montante = montante * 0.05;
		}
		vec[i] = + i;
		vec[i] = montante;
		
		total = vec2[1] + vec2[2] + vec2[3] + vec2[4] + vec2[5];
		total2 = vec[1] + vec[2] + vec[3] + vec[4] + vec[5];
	}
	
	printf("O montante e de %s: \n%d %d\n%d %d\n%d %d\n%d %d\n%d %d\n============\n%d %d", nome, vec2[1], vec[1], vec2[2], vec[2], vec2[3], vec[3], vec2[4], vec[4], vec2[5], vec[5], total, total2);
	
	return 0;
}
