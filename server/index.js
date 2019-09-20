require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')



const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env


const app = express()

app.use(express.json())


app.get('/api/houses', ctrl.getHouses)

app.post('/api/house', ctrl.createHouse)

app.delete('/api/house/:id', ctrl.deleteHouse)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);

    console.log("db live")
 
})

app.listen(SERVER_PORT, () => console.log(`Server live on ${SERVER_PORT}`))
