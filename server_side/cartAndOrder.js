const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()


router.post('/cart', (request, response) => {
    const {Quantity,totalAmount,totalDiscount,MRid,productID} = request.body
   
    const connection = db.connect1()
    const statement = `
    insert into orderdetails (Quantity,totalAmount,totalDiscount,MRid,productID,flag) values(${Quantity}, ${totalAmount}, ${totalDiscount}, ${MRid}, ${productID},0)`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/addcart', (request, response) => {
   
    const {mrid} = request.body
    const connection = db.connect1()
    const statement = `select o.Quantity,o.totalAmount,o.totalDiscount,o.MRid,o.ProductID,o.flag, p.image,p.name from orderdetails o inner join products p where o.productID=p.id and o.flag = 0 and o.MRid = ${mrid}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})




module.exports = router

