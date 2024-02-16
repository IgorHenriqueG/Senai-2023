const form = document.querySelector('form');
const uri = 'http://localhost:3000/items';
const dados = [];
const sysmsg = document.querySelector('#sysmsg');

const tbody = document.querySelector('tbody');

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
        const tr = document.createElement('tr');
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
                <button onclick="edit(${item.id})">🖊️</button>
                <button onclick="del(${item.id})">🗑️</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// CRUD - UPDATE

function edit(id) {
    const item = dados.find(item => item.id === id);
    document.querySelector('#id').value = item.id;
    document.querySelector('#nome').value = item.nome;
    document.querySelector('#desc').value = item.desc;
    document.querySelector('#valor').value = item.valor;
}

// CRUD - DELETE
function del(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
    // .then(res => res.json())
    .then(res => {
        window.location.reload();
    });
}