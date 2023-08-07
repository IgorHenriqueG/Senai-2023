#include <stdio.h>

int main(void){
	int a, b, c;
	
	printf("Entre o primeiro lado do triangulo: ");
	scanf("%d", &a);
	
	printf("Entre o segundo lado do triangulo: ");
	scanf("%d", &b);
	
	printf("Entre o terceiro lado do triangulo: ");
	scanf("%d", &c);
	
	if(a == b && a == c){
		printf("Equilatero");
	} else if(a == b || a == c) {
		printf("Isosceles");
	} else {
		printf("Escaleno");
	}
	return 0;
}
