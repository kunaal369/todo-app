const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

// Define API routes for Todo CRUD operations
router.post("/", todoController.createTodo);    // Create a new Todo
router.get("/", todoController.getTodos);       // Get all Todos
router.put("/:id", todoController.updateTodo);  // Update a Todo by ID
router.delete("/:id", todoController.deleteTodo); // Delete a Todo by ID

module.exports = router;
