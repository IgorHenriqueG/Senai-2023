#include <stdio.h>
#include <locale.h>

int main(void){
	int tempo, horas = 0, minutos = 0, segundos = 0;
	
	printf("Digite o tempo em segundos: ");
	scanf("%d", &tempo);
	
	
	while(tempo > 0){
		if(tempo > 0){
			if(tempo < 60){
				segundos = tempo;
				tempo = 0;
			}else if(tempo < (60 * 60)){
				minutos++;
				tempo = tempo - 60;
			}else{
				horas++;
				tempo = tempo - (60 * 60);
			}	
		}	
	}
	
	printf("Tempo em horas = %d:%d:%d", horas, minutos, segundos);	
	return 0;
}
