const db = require('./db')
const utils = require('./utils')
const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    const connection = db.connect1()
    const statement = `select id,title from category`
    connection.query(statement,(error,data)=>{
        connection.end()
        res.send(utils.createResult(error,data))
    })
})


router.post('/',(req,res)=>{
    const {title,description} = req.body
    const connection = db.connect1()
    const statement = `insert into category (title,description) values('${title}','${description}')`
    connection.query(statement,(error,data)=>{
        connection.end()
        res.send(utils.createResult(error,data))
    })
})

router.put('/:id',(req,res)=>{
    const {id} = req.params
    const {title,formula,company,description} = req.body

    const connection = db.connect1()
    const statement = `update category set title = '${title}',formula = '${formula}',company = '${company}',description = '${description}'  where id = ${id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        res.send(utils.createResult(error,data))
    })
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params
    const connection = db.connect1()

    const statement = `delete from category where id = ${id}`
 
   // const statement2 = `delete from Product where categoryId = ${id}`

   connection.query(statement,(error,data)=>{
       connection.end()
       res.send(utils.createResult(error,data))
   })
})


module.exports = router