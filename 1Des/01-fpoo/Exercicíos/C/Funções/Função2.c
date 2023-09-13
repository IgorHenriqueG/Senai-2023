#include <stdio.h>
#include <locale.h>

int media(a, b, c){
	return (a + b + c) / 3;
}

int main(void){
	int a, b, c;
	printf("Insira as 3 notas do aluno: ");
	scanf("%d %d %d", &a, &b, &c);
	
	media(a, b, c);
	
	printf("%d", media());
	return 0;
}
