class Item {
    constructor(i) {
        this.id = i.id
        this.name = i.name
        this.desc = i.desc
        this.price = i.price
        this.image = i.image
    }

    create() {
        return `INSERT INTO item VALUE('${this.id}', '${this.name}', '${this.desc}', ${this.price}, '${this.image}')`
    }

    read() {
        if(this.id == undefined) {
            return `SELECT * FROM item`
        } else {
            return `SELECT * FROM item WHERE id = '${this.id}'`
        }
    }

    update() {
        return `UPDATE item SET name = '${this.name}', desc = '${this.desc}', price = ${this.price}, image = '${this.image}' WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM item WHERE id = '${this.id}'`
    }
}

module.exports = Item;