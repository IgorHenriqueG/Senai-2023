const form = document.querySelector('form');
const uri = 'http://localhost:3000/info';
const dados = [];
const sysmsg = document.querySelector('#sysmsg');

// CRUD - CREATE

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        id: document.querySelector('#id').value,
        nome: document.querySelector('#nome').value,
        desc: document.querySelector('#desc').value,
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
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    sysmsg.innerText = '';

    if(dados.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="5">Nenhum item encontrado</td>';
        tbody.appendChild(tr);
        sysmsg.classList.add('error');
        sysmsg.innerText = 'ERROR: 404 - Nenhum item encontrado';
        return
    }

    dados.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.desc}</td>
            <td>${item.valor}</td>
            <td>
                <button onclick="edit(${item.id})">🖊️</button>
                <button onclick="remove(${item.id})">🗑️</button>
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