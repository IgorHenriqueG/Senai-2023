#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	FILE *arquivo;
	char str[80];
	int n[10];
	int n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, soma;
	
	arquivo = fopen ("Dados.txt", "r");
	if(arquivo == NULL)
		printf("Erro, não foi possivel abrir o arquivo\n");
	else{
		while((fgets(str, 80, arquivo)) != NULL){
			soma = strtok(str, " ");

			n0 = atoi(strtok(NULL," "));
			n1 = n0 - 1;
			n2 = n1 + 1;
			n3 = n2 + 1;
			n4 = n3 + 1;
			n5 = n4 + 1;
			
			n6 = n5 + 1;
			n7 = n6 + 1;
			n8 = n7 + 1;
			n9 = n8 + 1;
			n10 = n9 + 1;
		}
		soma = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10);
		printf("%d %d %d %d %d %d %d %d %d %d = %d", n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, soma);
	}
	fclose(arquivo);
	return 0;
}
