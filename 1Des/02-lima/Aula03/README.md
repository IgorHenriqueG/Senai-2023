# Resumo da aula 3 LIMA

## HTML

- Para executar utilize um browser.

 |HTML|
 |-|
 |Browser|

- Tags

```html
<form> <!-- Cria um formulário. -->
    <input type="text" placeholder="text"> <!-- Cria um input do tipo texto. -->
    <input type="number" placeholder="number"> <!-- Cria um input do tipo numerico. -->
    <input type="password" placeholder="password"> <!-- Cria um input do tipo senha. -->
    <input type="email" placeholder="email"> <!-- Cria um input do tipo email. -->
    <input type="date" placeholder="date"> <!-- Cria um input de data. -->
    <input type="search" placeholder="search"> <!-- Cria um input de pesquisa. -->
    <input type="submit" value="submit"> <!-- Cria um input de envio. -->
    <input type="reset" value="reset"> <!-- Cria um input de resetar. -->
</form>

<!-- Inputs do tipo radio caso tenham o mesmo "name" somente um pode ser selecionado. -->
<input type="radio" name="genero" value="M">Masculino  <!-- Cria um input do tipo radio. -->
<input type="radio" name="genero" value="F">Feminino
<input type="radio" name="genero" value="O">Outro<br/>

<!-- Inputs do tipo checkbox podem ser vários selecionados. -->
<input type="checkbox" name="vicios" value="tabaco">Tabaco  <!-- Cria um input do tipo caixa de checagem. -->
<input type="checkbox" name="vicios" value="alcool">Alcool
<input type="checkbox" name="vicios" value="aposta">Apostas

<input type="color"> <!-- Cria um input do tipo cor. -->
<input type="range"> <!-- Cria um input do tipo barra de porcentagem. -->

<fieldset>  <!-- Fieldset, funciona como um form, porém tem uma linha ao redor. -->
    <legend>Legend</legend>  <!-- Legenda do fieldset. -->
    <label>Nome: </label>  <!-- Cria uma label. -->
    <input type="text" placeholder="text">
    <label>Idade: </label>
    <input type="number" placeholder="number">
</fieldset>
```