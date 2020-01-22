const db = require('./db')
const utils = require('./utils')
const express = require('express')
//const multer = require('multer')

const router = express.Router()

//const upload = multer({dest: 'images'})

// to insert details of adding to cart product
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

// to show product in cart list
router.post('/addcart', (request, response) => {
   
    const {mrid} = request.body
    const connection = db.connect1()
    const statement = `select o.id,o.Quantity,o.totalAmount,o.totalDiscount,o.MRid,o.ProductID,o.flag, p.image,p.name from orderdetails o inner join products p where o.productID=p.id and o.flag = 0 and o.MRid = ${mrid}  `
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


// when user is editing his cart product
router.put('/cartEdit', (request, response) => {
    const {Quantity,totalAmount,totalDiscount,MRid,productID,orderDetailsTableID} = request.body
    
    const connection = db.connect1()
    const statement = `
    update orderdetails set Quantity=${Quantity},totalAmount=${totalAmount}, totalDiscount=${totalDiscount}, MRid=${MRid}, productID=${productID} where id = ${orderDetailsTableID} `
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


// to delete an item of cart
router.post('/cartDelete', (request, response) => {
   
    const {id} = request.body
    const connection = db.connect1()
    const statement = `delete from orderdetails where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// to update orderlist (called when user is confired to order)
router.put('/cart/confirmorder', (request, response) => {
    const {OrderDate,deliveryDate,PaymentMode,mrid,drname,addressOFdr,drphoneno} = request.body
   
    const connection = db.connect1()
    const statement = `
    update orderdetails set OrderDate = '${OrderDate}', deliveryDate =  '${deliveryDate}', PaymentMode = '${PaymentMode}', drname = '${drname}', addressOFdr = '${addressOFdr}', drphoneno = '${drphoneno}',flag = 1 where MRid = ${mrid} and flag = 0`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// to insert address in locationofdr table (called when user is confired to order)
router.post('/cart/confirmorder', (request, response) => {
    const {fullname,phoneno,state,city,pincode,address,mrid} = request.body
   
    const connection = db.connect1()
    const statement = `
    insert into locationofdr (fullname,phoneno,state,city,pincode,address,mrid) values('${fullname}', '${phoneno}', '${state}', '${city}', '${pincode}','${address}',${mrid})`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

//to get address of dr
router.get('/cart/confirmorder', (request, response) => {
    
    const connection = db.connect1()
    const statement = `
    select * from locationofdr`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


//to get list of orders of a MR
router.post('/orders', (request, response) => {
    const {mrid} = request.body
    const connection = db.connect1()
    const statement = `
    select p.image,p.name, o.id,o.Quantity,o.totalDiscount,o.totalAmount,o.drname,o.drphoneno,o.PaymentMode,
    o.OrderDate,o.deliveryDate,addressOFdr from orderdetails o inner join products p where o.ProductID = p.id and o.MRid = ${mrid} and flag = 1 order by o.deliveryDate desc`
    
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/orders/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = ` delete from orderdetails where id = ${id} `
     
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


//to get list of orders of All mrs
router.get('/dashboard/orders', (request, response) => {
    const connection = db.connect1()
    const statement = `
    select p.image,p.name, o.id,o.Quantity,o.totalDiscount,o.totalAmount,o.drname,o.drphoneno,o.PaymentMode,
    o.OrderDate,o.deliveryDate,addressOFdr,o.MRid from orderdetails o inner join products p where o.ProductID = p.id and flag = 1 order by o.deliveryDate desc`
    
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


// to get list of orders of a mr in admin side
router.get('/dashboard/MRorders/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = `
    select p.image,p.name, o.id,o.Quantity,o.totalDiscount,o.totalAmount,o.drname,o.drphoneno,o.PaymentMode,
    o.OrderDate,o.deliveryDate,addressOFdr,o.MRid from orderdetails o inner join products p where o.ProductID = p.id and o.MRid=${id} and flag = 1 order by o.deliveryDate desc`
    
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})




module.exports = router

