# Resumo da aula 4 LIMA

## CSS

- Para executar utilize um browser.

 |HTML & CSS|
 |-|
 |Browser|

- Tags class & id
    - CSS styles
    - Background Image
<br>
<hr>
<br>

- Tags class & id
    - HTML

Cria-se uma class ou id em uma tag que queira estilizar, referenciando a class ou id em questão no CSS
```html
    <h1 class="titulo">Exemplo de class</h1> <!-- Dá a classe "titulo" ao h1 -->

    <h1 id="subtitulo">Exemplo de id</h1> <!-- Dá o id "subtitulo" ao h1 -->
```

- Tags class & id
    - CSS

```css
body{ /* Usado para referenciar o body do html */
    /* Estilize o corpo do site */
}

h1{ /* Usado para referenciar todos os h1 do html */
    /* Estilize todos as tags h1 de uma vez */
}

.titulo{ /* Usado para referenciar todas as tags com a classe titulo */
    /* Estilize as tags com a classe titulo */
}

#subtitulo{ /* Usado para referenciar todas as tags com o id subtitulo */
    /* Estilize as tags com o id subtitulo */
}


```

<br>
<hr>
<br>

## CSS Styles

- CSS Inline
    - CSS Interno
    - CSS Externo

<br>
<br>
<br>

- CSS Inline
    - Estilização em linha, se abre uma tag style="" sempre que quiser estilizar algo.
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Inline</title>
</head>

<body style="background-color: black;"> <!-- Define a cor de fundo do body como preta -->
    <h1 style="color: red; text-align: center; font-size: 4em;">TITULO</h1> <!-- Define a cor do texto como vermelho, alinha o texto ao centro, e define o tamanho do texto -->
    <h1 style="color: blue; text-align: center; font-size: 3em;">TITULO</h1> <!-- Define a cor do texto como vermelho, alinha o texto ao centro, e define o tamanho do texto -->

</body>
```
<br>
<hr>
<br>

- CSS Interno
    - Estilização em tag dentro do HTML, se abre uma tag ```<style></style>``` e a usa para estilizar algo.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Interno</title>
    <style>
        body{ /* Referencia a tag body a ser estilizada */
            background-color: black; /* Define a cor de fundo do body como preta */
        }

        h1{ /* Referencia a tag h1 a ser estilizada */
            text-align: center; /* Alinha o h1 ao centro */
            font-size: 4em; /* Define o tamanho do h1 */
        }

        .t1{ /* Referencia a classe t1 a ser estilizada */
            color: red; /* Define a cor de texto do t1 como vermelho */
        }

        #t2{ /* Referencia o id t2 a ser estilizado */
            color: blue; /* Define a cor de texto do t2 como azul */
        }
    </style>
</head>

<body>
    <h1 class="t1">TITULO</h1> <!-- Define o h1 com a class de t1 -->
    <h1 id="t2">TITULO</h1> <!-- Define o h1 com o id de t2 -->
</body>
```

<br>
<hr>
<br>

- CSS Externo - HTML

Se cria um arquivo "style.css" e o referencia no html, assim podendo se fazer a estilização do site de uma forma mais orgazinada

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Externo</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1 class="t1">TITULO</h1>
    <h1 id="t2">TITULO</h1>
</body>
```

- CSS Externo - CSS
    - Dentro do arquivo de estilo CSS, estilize seu site da maneira que quiser.

```css
body{
    background-color: black;
}

h1{
    text-align: center;
    font-size: 4em;
}

.t1{
    color: red;    
}

#t2{
    color: blue;
}
```
<br>
<hr>
<br>

## Background Image
- Funcionamento
    - CSS Inline
    - CSS Interno
    - CSS Externo


### Funcionamento

Utilizando CSS como exemplo.
```css

body{ /* Referencia a tag body */
    background-image: url(exemplo.png); /* Coloca uma imagem como fundo do body, dentro da "url()" coloque o caminho até sua imagem */
    background-size: cover; /* Ajusta o tamanho da imagem para que cubra o body inteiro */
}

```

### Background Image CSS Inline
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Inline</title>
</head>

<body style="background-image: url(exemplo.png); background-size: cover;">
    <h1>TITULO</h1>
    <h1>TITULO</h1>
</body>
```

### Background Image CSS Interno

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Interno</title>
    <style>
        body{
            background-image: url(exemplo.png);
            background-size: cover;
        }
    </style>
</head>

<body>
    <h1>TITULO</h1>
    <h1>TITULO</h1>
</body>
```

### Background Image CSS Externo


HTML
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Interno</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>TITULO</h1>
    <h1>TITULO</h1>
</body>
```


CSS
```css

body{
    background-image: url(exemplo.png);
    background-size: cover;
}

```