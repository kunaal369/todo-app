import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// Fetch all todos
export const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

// Add a new todo
export const addTodo = async (newTodo) => {
    await axios.post(API_URL, newTodo);
};

// Update an existing todo
export const updateTodo = async (id, updatedTodo) => {
    await axios.put(`${API_URL}/${id}`, updatedTodo);
};

// Delete a todo
export const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
