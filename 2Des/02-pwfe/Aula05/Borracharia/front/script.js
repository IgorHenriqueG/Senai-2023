const dataTable = document.querySelector('#data');
const uri = 'http://localhost:3000';
var list = [];

function loadProducts() {
    fetch(uri + '/products')
        .then(response => response.json())
        .then(data => {
            list.push(...data);
            render('p');
        })
};

function loadClients() {
    fetch(uri + '/clients')
        .then(response => response.json())
        .then(data => {
            list.push(...data);
            render('c');
        })
}

function loadSuppliers() {
    fetch(uri + '/suppliers')
        .then(response => response.json())
        .then(data => {
            list.push(...data);
            render('s');
        })
}

function render(type) {
    dataTable.innerHTML = '';

    if(type == 'c') {
        list.forEach(cli => {
            dataTable.innerHTML += `
                <tr>
                    <td>${cli.id}</td>
                    <td>${cli.name}</td>
                    <td>
                        <button>Editar</button>
                        <button>Deletar</button>
                    </td>
                </tr>
            `
        });
    }else if(type == 's') {
        list.forEach(sup => {
            dataTable.innerHTML += `
                <tr>
                    <td>${sup.id}</td>
                    <td>${sup.name}</td>
                    <td>
                        <button>Editar</button>
                        <button>Deletar</button>
                    </td>
                </tr>
            `
        });
    } else {   
        list.forEach(item => {
            dataTable.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td>
                        <button>Editar</button>
                        <button>Deletar</button>
                    </td>
                </tr>
            `
        });
    }
};