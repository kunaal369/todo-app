const { Todo } = require("../models");

// Create a new Todo
exports.createTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const newTodo = await Todo.create({ title });
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all Todos
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a Todo
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title  } = req.body;
        await Todo.update({ title  }, { where: { id } });
        res.status(200).json({ message: "Todo updated" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a Todo
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.destroy({ where: { id } });
        res.status(200).json({ message: "Todo deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
