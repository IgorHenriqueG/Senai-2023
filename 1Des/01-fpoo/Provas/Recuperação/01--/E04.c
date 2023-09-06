#include <stdio.h>

int inicio(){
	int x1 = 10;
	int y1 = 10;
	int x2 = (20 + 10) * -1;
	int y2 = 110 - 10 / y1;
	
	if(x1 < x2){
		printf("X1 A ESQUERDA");
	}else if(x1 == x2){
		printf("Mesmo ponto horizontal");
	}else{
		printf("X1 A DIREITA");
	}
	
	if(y1 < y2){
		printf("Y1 A CIMA");
	}else if(y1 == y2){
		printf("Mesmo ponto vertical");
	}else{
		printf("Y1 A BAXO");
	}
}

int main(void){
	inicio();
	return 0;
}
