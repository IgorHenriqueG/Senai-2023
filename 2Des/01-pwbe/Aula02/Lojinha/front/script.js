const form = document.querySelector("form");
const cpfInput = document.querySelector("#cpf");

cpfInput.addEventListener("input", (event) => {
    const value = event.target.value;
    const formattedValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    if (value === formattedValue) {
        event.target.value = value;  
    } else {
        event.target.value = formattedValue;
    }
})