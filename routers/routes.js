const express = require("express")
const router = new express.Router()
const employeeController = require("../controller/controller")

router.route('/employees').get(employeeController.fetchEmployees)   // fetch employees
router.route('/employees/:id').get(employeeController.fetchEmployeeWithId)  // fetch employee with their id
router.route("/employees").post(employeeController.addNewEmployees)  // add new employees
router.route("/employees/:id").patch(employeeController.updateEmployees)  // update the employee by passing their id
router.route('/employees/:id').delete(employeeController.deleteEmployees)  // delete employee

module.exports = router;