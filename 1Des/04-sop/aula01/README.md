# Resumo da aula 1 SOP

## BASH

- Para executar utilize o GitBash.

 |BASH|
 |-|
 |GitBash|

- Comandos Bash

```
mkdir - Cria uma pasta.
rmdir - Remove uma pasta.
pwd - Mostra o diretório sendo usado.
ls -l - Lista arquivos e diretórios.
mv - Renomeia um arquivo.
```
- Comandos VI
```
vi - Cria um arquivo. Exemplo: vi cidades.sh
"esc + i" - Para escrever.
"esc", ":w" - Para salvar o arquivo.
":w" - Salva o arquivo.
":q" - Fecha o arquivo.
":wq" - Salva e fecha o arquivo.

"esc + dd" - Apaga a linha.
"esc + númerodd" - Apaga o número de linhas selecionado. Exemplo "esc + 5dd", apaga 5 linhas.
"esc + x" - Apaga o caracter a direita.

"esc + u" - Desfazer.
"esc + yy" - Copiar.
"p" - Colcar.

"esc + :set nu" - Mostra os números das linhas.
"esc + :set no nu" - Esconde os números das linhas.

"esc + numero G" - Vai para a linha de número selecionado. Exemplo "esc + 10 G", vai para a linha 10.
"esc G" - Vai para a ultima linha.
"esc O" - Vai para a primeira linha.

"esc /palavra" - Localiza uma palavra. Exemplo "esc /Lousa", localiza a palavra lousa dentro do VI.
./nome.extensão - Executa o arquivo selecionado. Exemplo ./cidades.sh


Caso o arquivo não tenha nome, ":w nome".

Permições:

R - Leitura. |4| Número da permição.
W - Escrita. |2| Número da permição.
X - Executar. |1| Número da permição.
```
- For loop
```
for x in 1 2 3 4 5 - Para cada x
do -faça
mkdir aula$x - Crie uma pasta chamada aula + número
done - Finaliza

O código a cima irá criar 5 pastas chamadas aula de 1 a 5
```