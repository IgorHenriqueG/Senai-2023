const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const isUrl = require('is-url');

const PORT = 3000

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'beatify'
});

const testResponse = (req, res) => {
    res.send('Beatify is up and running!');
}

const create = (req, res) => {
    const {artist, title, cover, url, duration} = req.body;
    const urlVerification = isUrl(cover);

    // if(duration != parseInt(duration))
    //     res.status(400).send('Duration must be an integer');
    
    if(!urlVerification)
        res.status(400).send('Cover must be a valid URL');

    if(!artist || !title || !cover || !url || !duration)
        res.status(400).send('All fields must be filled');
    let query = "INSERT INTO Musics(artist, title, cover, url, duration) VALUE";
    query += "('" + artist + "', '" + title + "', '" + cover + "', '" + url + "', '" + duration + "');";
    con.query(query,(err, result)=>{
        if(err) {
            res.redirect("http://127.0.0.1:5500/front/index.html");
        }else {
            res.redirect("http://127.0.0.1:5500/front/index.html");
        }
            
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

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
})