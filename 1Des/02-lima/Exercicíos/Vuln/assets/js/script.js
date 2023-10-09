

function vuln(){
    let textInput = document.querySelector("#inputText")
    let vuln = document.querySelector("#vuln")
    let noVuln = document.querySelector("#noVuln")

    vuln.innerHTML = textInput.value
    noVuln.textContent = textInput.value
}