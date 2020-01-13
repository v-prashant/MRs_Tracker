const db = require('./db')
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')

const router = express.Router()
 
router.post('/', (request, response) => {
    const {email,password} = request.body
    const encryptedPassword = '' + cryptoJs.MD5(password)
    const connection = db.connect1()
    const statement = `
    select * from mrs where email='${email}' and password = '${encryptedPassword}'`
    connection.query(statement, (error, data) => {
        const data1 = {}
        if(data.length != 0 )
        {
            console.log('hello')
            data1['status']='success'
            response.send(data1)
        }
        else
        {   data1['status']='null'
            response.send(data1)
        }
        
    })
})







module.exports = router