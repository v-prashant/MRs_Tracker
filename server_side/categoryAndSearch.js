const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer = require('multer')

const router = express.Router()

const upload = multer({dest: 'images'}) 


router.get('/allopathic', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from products where categoryId = 3`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.get('/homoeopathy', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from products where categoryId = 4`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.get('/ayurvedic', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from products where categoryId = 5`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.post('/search',(request,response)=>{
    const {ProductName} = request.body

    const connection = db.connect1()

    const statement = `select * from products where name like '%${ProductName}%'  `
    
    connection.query(statement,(error,data)=>{
        console.log(statement)
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports = router 