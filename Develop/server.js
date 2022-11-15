const express = require('express')

const app = express()

const path = require('path')


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const notes = require('./db/db.json')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
});

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.post('/api/notes', (req, res) => {
    let createdNote = {
        title: req.body.title,
        text: req.body.text,
    }
})







app.listen(process.env.PORT || 3001);