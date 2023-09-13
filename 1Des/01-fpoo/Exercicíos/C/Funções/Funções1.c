#include <stdio.h>
#include <locale.h>

int soma(int a, int b){
	return a + b;
}

int media(int a, int b){
	return (a + b) / 2;
}

int procedimentoBart(){
	int i;
	for(i = 0; i < 100; i++){
		printf("Não vou atormentar a Lisa Simpson %d\n", i + 1);
	}
}

int frases(char frase[], int n){
	int i;
	for(i = 0; i < n; i++){
		printf("%s %d\n", frase, i + 1);
	}
}

int main(void){
	setlocale(LC_ALL,"");
	frases("Palmeiras não tem mundial", 5);
	return 0;
}
