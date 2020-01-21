const db = require('./db')
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')

const router = express.Router()
 

router.post('/', (request, response) => {
    const {email,password} = request.body
    const connection = db.connect1()
    const statement = `
    select * from mrs where email='${email}' and password = '${password}'`
    connection.query(statement, (error, data) => {
        const result = {}
        if(data.length != 0 )
        {
            result['status'] = 'success'
            result['data'] = data
            response.send(result) 
        }
        else
        {   
            result['status'] = 'error'
            result['error'] = error   
            response.send(result)           
        }
        
    })
})







module.exports = router