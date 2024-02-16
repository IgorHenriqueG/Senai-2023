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
        console.log(dados);
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
                <button onclick="edit(this)">🖊️</button>
                <button onclick="del(${item.id})">🗑️</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// CRUD - UPDATE

function edit(item) {
    
    const id = item.parentNode.parentNode.children[0].innerText;
    const nome = item.parentNode.parentNode.children[1].innerText;
    const descricao = item.parentNode.parentNode.children[2].innerText;
    const valor = item.parentNode.parentNode.children[3].innerText;

    document.querySelector('#id').value = id;
    document.querySelector('#nome').value = nome;
    document.querySelector('#desc').value = descricao;
    document.querySelector('#valor').value = valor;

    document.querySelector('#act').value = 'Alterar';

    document.querySelector('#act').innerText = 'Alterar';

    document.querySelector('#act').addEventListener('click', () => {
        
        const data = {
            id: document.querySelector('#id').value,
            nome: document.querySelector('#nome').value,
            descricao: document.querySelector('#desc').value,
            valor: document.querySelector('#valor').value
        }

        fetch(`${uri}/${id}`, {
            
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)


        })

        .then(res => res.json())
        .then(data => {
            if(data.error) {
                sysmsg.classList.add('error');
                sysmsg.innerText = data.error;
                return
            } else {
                sysmsg.classList.remove('error');
                sysmsg.innerText = data.success;
            }
        })
    })
    

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