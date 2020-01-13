const db = require('./db')
const utils = require('./utils')
const express = require('express')


const router = express.Router()
     
router.get('/', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from drs`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.post('/', (request, response) => {
    const {firstname, lastname, phoneNo,degree} = request.body

    const connection = db.connect1()
    const statement = `
    insert into drs (firstname,lastname,phoneNo,degree) values('${firstname}','${lastname}','${phoneNo}','${degree}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.delete('/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = `delete from drs where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

module.exports = router