const Connection = require('../Connection');
const express= require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())
app.get('/admin/:admin_id', (req,res) => {
    Connection.query('SELECT * FROM admin WHERE admin_id=?' , [req.params.admin_id],(err,rows)=> {
        if(err) {
            console.log(err)
        } else {
            // console.log(rows)
            res.send(rows)
        }
    })
})
app.post('/admin', (req,res) => {
    var  emp = req.body
    Connection.query('Insert into admin(admin_id,sadmin_name) values(?)' ,[emp],(err,rows)=> {
        if(err) {
            console.log(err)
        } else {
            // console.log(rows)
            res.send(rows)
        }
    })
})
app.listen(3000,()=>{
  console.log("Express server is running on por 3000")
})