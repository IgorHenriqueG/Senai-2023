# Resumo de aula 1 LIMA

## HTML

- Para executar utilize um browser.

 |HTML|
 |-|
 |Browser|

- Tags
```
<head></head> -- Informações de instrução para o Browser são colocadas aqui.
<title></title> -- É utilizada dentro da <head></head>, altera o titulo da aba.
<body></body> -- Corpo da página, informações visiveis ao usuário.
<hr> -- Cria uma linha horizontal para separação.
<center></center> -- centraliza objetos ao centro da página. Exemplo: <center><h1>Este texto ficará centralizado</h1></center>
<h1></h1> -- É utilizado como titulo de sua página, deixa o texto em negrito. <h1> sendo a maior fonte, e <h6> a menor.
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
<p></p> -- Cria um parágrafo.
<br> -- Quebra de linha.
```

## Atividade
### Criação de curriculo
- Crie um curriculo utilizando as tags apresentadas a cima

<hr>

## Comandos gitbash

- Para utilizar abra o git bash com o botão direito "Open Git bash here"
 |GITBASH|
 |-|
 |Pasta|

### Login Gitbash

```
git config --global user.name " " (Entre as aspas escreva o nome de seu usuário github)
git config --global user.email " " (Entre as aspas escreva o seu endereço de email associado a sua conta github)
```

### Baixar e atualizar seu repositório git
```
git clone URL (Subistitua URL pela URL de seu repositório git, isso fará um clone do repositório em seu computador)
git pull (Baixa qualquer arquivo do repositório que tenha alguma alteração)
```

### Comandos para enviar arquivos ao git
```
git add . (Seleciona a pasta .git para referenciar o repositório a ser atualizado)
git commit -m " " (Escreva algo entre as aspas para que seja mostrando e atualizado em seu repositório)
git push (Confirma e executa o envio de arquivos ao repositório)
```