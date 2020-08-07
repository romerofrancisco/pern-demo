const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); //this accesss to request.body and returns json data

//routes//
//------------------------//

//Testing INSERT
// app.post('/report', async (req, res) => {
//     try {
//         const {
//             department,
//             division
//         } = req.body;
//         const newEmployee = await pool.query(`INSERT INTO departments VALUES('${department}', '${division}') RETURNING *;`);
//         res.json('record added');
//     } catch (err) {
//         console.error(err.message)
//     }
// })

//get all employees

app.get('/report', async (req, res) => {
    try {
        const employees = await pool.query('SELECT employee_id,first_name,last_name,email,hire_date,department,salary FROM employees;')
        res.json(employees.rows)
    } catch (err) {
        console.error(err.message)
    }
});


//get a employee

app.get('/report/:id', async (req, res) => {
    try {
        const { id } = req.params
        const employee = await pool.query(`SELECT * FROM employees WHERE employee_id = '${id}';`);
        res.json(employee.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});

//update an employee
//app.put()

//delete an employee
//app.delete()

let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
};
app.listen(port, () => {
    console.log(`Server has started on port: ${port}`);
});