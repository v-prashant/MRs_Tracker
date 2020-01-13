const db = require('./db')
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')

const router = express.Router()
     
router.get('/', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from mrs`
    connection.query(statement, (error, data) => {
        connection.end()
       /* const users = []
        for (let index = 0; index < data.length; index++) {
            const user = data[index]
            users.push({
                id: user['id'],
                username: user['username'],
                full_name: user['full_name'],
                email: user['email']
            })
        }*/
        response.send(utils.createResult(error, data))  //data->users
    })
})


     
router.get('/edit_user/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = `select * from mrs where id='${id}'`
    connection.query(statement, (error, data) => {
     
        
        response.send(utils.createResult(error, data))  
        
    })
})


router.post('/', (request, response) => {
    const {username,firstname,lastname,joindate,phoneno,email,password} = request.body
    const encryptedPassword = '' + cryptoJs.MD5(password)
    const connection = db.connect1()
    const statement = `
    insert into mrs (username, firstname, lastname,joindate, phoneno, email, password) values('${username}', '${firstname}', '${lastname}','${joindate}', '${phoneno}', '${email}', '${encryptedPassword}' )`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.delete('/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = `delete from mrs where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.put('/edit_user/:id',(request,response)=>{
    const {id} = request.params
    const {username,firstname,lastname,joindate,phoneno,email,password} = request.body
    const connection = db.connect1()

    const statement = `update mrs set username='${username}',firstname='${firstname}',lastname='${lastname}',joindate='${joindate}',phoneno='${phoneno}',email='${email}',password='${password}' where id =${id}`
    
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports = router