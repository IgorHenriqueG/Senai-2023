#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
	char time[20][5], temp2[20];
	int vitorias[20], empates[20], totalPontos[20], temp, i;
	
	for(i = 1; i <= 5; i++){
		printf("\nNome do time: ");
		scanf("%s", &time[i]);
		time[i] + i;
		
		printf("Vitórias do time %s: ", time[i]);
		scanf("%d", &vitorias[i]);
		vitorias[i] + i;
		
		printf("Empates do time %s: ", time[i]);
		scanf("%d", &empates[i]);
		empates[i] + i;
	}
	
	for(i = 1; i <= 5; i++){
		vitorias[i] = vitorias[i] * 3;
		
		
		totalPontos[i] = vitorias[i] + empates[i];
		vitorias[i] + i;
		empates[i] + i;
		totalPontos[i] + i;
		
	}
	
	for(i = 1; i <= 5; i++){
		if(totalPontos[1] < totalPontos[2]){
			temp2 = time[20][1];
			time[20][1] = time[20][2];
			time[20][2] = temp2;
			
			temp = totalPontos[1];
			totalPontos[1] = totalPontos[2];
			totalPontos[2] = temp;
		}
		if(totalPontos[2] < totalPontos[3]){
			temp2 = time[20][2];
			time[20][2] = time[20][3];
			time[20][3] = temp2;
			
			temp = totalPontos[2];
			totalPontos[2] = totalPontos[3];
			totalPontos[3] = temp;
		}
		if(totalPontos[3] < totalPontos[4]){
			temp2 = time[20][3];
			time[20][3] = time[20][4];
			time[20][4] = temp2;
			
			temp = totalPontos[3];
			totalPontos[3] = totalPontos[4];
			totalPontos[4] = temp;
		}
		if(totalPontos[4] < totalPontos[5]){
			temp2 = time[20][4];
			time[20][4] = time[20][5];
			time[20][5] = temp2;
			
			temp = totalPontos[4];
			totalPontos[4] = totalPontos[5];
			totalPontos[5] = temp;
		}
	}
	printf("\n");
	for(i = 1; i <= 5; i++){
		printf("%s\t%d\t%d\t%d\n", time[i], totalPontos[i], vitorias[i], empates[i]);
	}
	
	return 0;
}
