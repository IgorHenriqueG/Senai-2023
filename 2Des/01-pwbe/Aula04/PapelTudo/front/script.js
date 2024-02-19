const form = document.querySelector('form');
const uri = 'http://localhost:3000/items';
const dados = [];
const sysmsg = document.querySelector('#sysmsg');

const tbody = document.querySelector('tbody');

// var idBackup = null;

// CRUD - CREATE

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        id: document.querySelector('#id').value,
        nome: document.querySelector('#nome').value,
        descricao: document.querySelector('#desc').value,
        valor: document.querySelector('#valor').value
    }

    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
    .then(data => {
        if(data.error) {
            sysmsg.classList.add('error');
            sysmsg.innerText = data.error;
            return
        } else {
            sysmsg.classList.remove('error');
            sysmsg.innerText = data.success;
            dados.push(data);
            render();
            form.reset();
        }
    });

    window.location.reload();
});

// CRUD - READ

function load() {
    fetch(uri)
    .then(response => response.json())
    .then(data => {
        dados.push(...data);
        render();
    })
}

function render() {
    tbody.innerHTML = '';
    sysmsg.innerText = '';

    if(dados.length === 0) {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="5">Nenhum registro encontrado</td>';
        tbody.appendChild(tr);
        sysmsg.classList.add('error');
        sysmsg.value = 'ERROR: 404 - Nenhum registro encontrado';
        return
    }

    dados.forEach(item => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.descricao}</td>
            <td>${item.valor}</td>
            <td>
                <button onclick="edit(this)">🖊️</button>
                <button onclick="del(${item.id})">🗑️</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// CRUD - UPDATE

function edit(btn) {
    // const id = btn.parentNode.parentNode.children[0];
    const nome = btn.parentNode.parentNode.children[1];
    const descricao = btn.parentNode.parentNode.children[2];
    const valor = btn.parentNode.parentNode.children[3];
    const buttonVer = btn;
    const btnCancel = buttonVer.nextElementSibling;

    // idBackup = id.innerText;

    buttonVer.innerHTML = '✅';
    buttonVer.setAttribute('onclick', 'update(this)');
    btnCancel.innerHTML = '❌';
    btnCancel.setAttribute('onclick', 'cancel(this)');

    // id.setAttribute('contenteditable', 'true');
    // id.style = 'background-color: #f0f0f0; border: 1px solid #ccc;';
    nome.setAttribute('contenteditable', 'true');
    nome.style = 'background-color: #f0f0f0; 1px solid #ccc;';
    descricao.setAttribute('contenteditable', 'true');
    descricao.style = 'background-color: #f0f0f0; border: 1px solid #ccc;';
    valor.setAttribute('contenteditable', 'true');
    valor.style = 'background-color: #f0f0f0; border: 1px solid #ccc;';
}

function update(btn) {
    const id = btn.parentNode.parentNode.children[0];
    const nome = btn.parentNode.parentNode.children[1];
    const descricao = btn.parentNode.parentNode.children[2];
    const valor = btn.parentNode.parentNode.children[3];
    const buttonVer = btn;
    const buttonCancel = buttonVer.nextElementSibling;

    buttonVer.innerHTML = '🖊️';
    buttonVer.setAttribute('onclick', 'edit(this)');
    buttonCancel.innerHTML = '🗑️';
    buttonCancel.setAttribute('onclick', 'cancel(this)');

    // id.setAttribute('contenteditable', 'false');
    // id.style = 'background-color: transparent; border: none;';
    nome.setAttribute('contenteditable', 'false');
    nome.style = 'background-color: transparent; border: none;';
    descricao.setAttribute('contenteditable', 'false');
    descricao.style = 'background-color: transparent; border: none;';
    valor.setAttribute('contenteditable', 'false');
    valor.style = 'background-color: transparent; border: none;';

    const data = {
        id: id.innerText,
        nome: nome.innerText,
        descricao: descricao.innerText,
        valor: valor.innerText
    }

    fetch(`${uri}/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.error) {
            sysmsg.classList.add('error');
            sysmsg.innerText = data.error;
            return
        } else {
            sysmsg.classList.remove('error');
            sysmsg.innerText = data.success;
        }

        window.location.reload();
    });

    
}

function cancel(btn) {
    // const id = btn.parentNode.parentNode.children[0];
    const nome = btn.parentNode.parentNode.children[1];
    const descricao = btn.parentNode.parentNode.children[2];
    const valor = btn.parentNode.parentNode.children[3];
    const buttonCancel = btn;
    const buttonVer = buttonCancel.previousElementSibling;

    buttonVer.innerHTML = '🖊️';
    buttonVer.setAttribute('onclick', 'edit(this)');
    buttonCancel.innerHTML = '🗑️';
    buttonCancel.setAttribute('onclick', `del(${id.innerText})`);

    // id.setAttribute('contenteditable', 'false');
    // id.style = 'background-color: transparent; border: none;';
    nome.setAttribute('contenteditable', 'false');
    nome.style = 'background-color: transparent; border: none;';
    descricao.setAttribute('contenteditable', 'false');
    descricao.style = 'background-color: transparent; border: none;';
    valor.setAttribute('contenteditable', 'false');
    valor.style = 'background-color: transparent; border: none;';
}

// CRUD - DELETE
function del(id) {
    let item = dados.find(item => item.id == id);

    if(confirm(`Deseja excluir o item ${item.nome}?`))
        delData(id);
}

function delData(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
    // .then(res => res.json())
    .then(res => {
        window.location.reload();
    });
}