const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'beatify'
});

const testResponse = (req, res) => {
    res.send('Beatify is up and running!');
}

const create = (req, res) => {
    let query = "INSERT INTO Musics(artist, title, album, image, url, duration) VALUE";
    query += "('test', 'test', 'test', 'test', 'test', 'test');";
    con.query(query,(err, result)=>{
        if(err)
            res.redirect("http://127.0.0.1:5500/front/index.html?" + err.code);
        else
            res.redirect("http://127.0.0.1:5500/front/index.html");
    });
}

const delet = (req, res) => {
    let query = "DELETE FROM Musics WHERE id = " + 6 + ";";
    con.query(query,(err, result)=>{
        if(err)
            res.status(204).end()
        else
            res.status(200).end()
    })
}

const read = (req, res) => {
    con.query("SELECT * FROM Musics", (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.json(result);
        } 
    });
}

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', testResponse);
app.post('/songs', create);
app.get('/songs', read);
app.delete('/songs', delet);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})