const express = require("express")
const bodyParser = require("body-parser")
const router = require("./routers/routes")

var app = express();

app.use(bodyParser.json());

app.use(router);

// app.get('/employees', (req, res) => {
//     const page = parseInt(req.query.page) || 1; // Default page is 1
//     const pageSize = parseInt(req.query.pageSize) || 10; // Default page size is 10
  
//     // Calculate the offset based on the current page and page size
//     const offset = (page - 1) * pageSize;
//     connection.query('SELECT * FROM employees LIMIT ?, ?',[offset, pageSize], (err, rows) => {
//         if(err){
//             console.log(err)
//         }
//         else{
//             // console.log(rows)
//             res.send(rows)
//         }
//     })
// })

// app.get('/employees/:id', (req, res) => {
//     connection.query('SELECT * FROM employees WHERE id=?', [req.params.id], (err, rows) => {
//         if(err){
//             console.log(err)
//         }
//         else{
//             // console.log(rows)
//             res.send(rows)
//         }
//     })
// })

// app.post("/employees", (req, res) => {
//     var data = req.body
//     var empData = [data.name, data.job_title, data.phone_number, data.email, data.address, data.city, data.state]
//     const contactsData = data.emergency_contacts
//     connection.query("INSERT INTO employees (name, job_title, phone_number, email, address, city, state) values (?)", [empData], (err, rows) => {
//         if(err){
//             console.log(err)
//             res.status(500).json({
//                 status : "failure",
//                 error : err
//             })
//             return; 
//         }
//             const employee_id = rows.insertId
//             if(contactsData && contactsData.length > 0){
//                 const contacts = contactsData.map((contact) => [employee_id, contact.name, contact.phone_number, contact.relationship])
//                 connection.query("INSERT INTO emergency_contacts (employee_id, name, phone_number, relationship) VALUES ?", [contacts], (err, emergency_contacts_results) => {
//                     if(err){
//                         res.status(500).json({
//                             Status : "Failure",
//                             error : err
//                         })
//                         return;
//                     }
//                     res.status(200).json({
//                         status : "Success",
//                         result : rows
//                     })
//                 })
//             }
//             else{
//                 res.status(200).json({
//                     status : "Success",
//                     result : rows
//                 })
//             }

//     })
// })

// app.patch("/employees/:id", (req, res) => {
//     var data = req.body
//     connection.query("UPDATE employees SET ? WHERE id="+req.params.id, [data], (err, rows) => {
//         if(err){
//             console.log(err)
//             res.status(500).json({
//                 status : "failure",
//                 error : err
//             })
//         }else{
//             res.staus(200).json({
//                 status : "Success",
//                 result : rows
//             })
//         }
//     })
// })

// app.delete('/employees/:id', (req, res) => {
//     connection.query('DELETE FROM employees WHERE id=?', [req.params.id], (err, rows) => {
//         if(err){
//             console.log(err)
//             res.status(500).json({
//                 status : "Failure",
//                 error : err
//             })
//         }else{
//             res.status(500).json({
//                 status : "Success",    
//                 result : rows
//             })
//         }
//     })
// })



app.listen(3000, () => {
    console.log("Express server is running on port 3000")
})