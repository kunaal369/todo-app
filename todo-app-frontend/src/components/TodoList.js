import React, { useEffect, useState } from "react";
import { fetchTodos, deleteTodo } from "../api";
import TodoForm from "./TodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [editingTodo, setEditingTodo] = useState(null);

    const loadTodos = async () => {
        const data = await fetchTodos();
        setTodos(data);
    };

    useEffect(() => {
        loadTodos();
    }, []);

    const handleDelete = async (id) => {
        await deleteTodo(id);
        loadTodos();
    };

    return (
        <div className="mt-4">
            <h2 className="mb-3 text-center">Todo List</h2>

            <TodoForm
                onSuccess={() => {
                    setEditingTodo(null);
                    loadTodos();
                }}
                editMode={!!editingTodo}
                existingTodo={editingTodo}
                onCancel={() => setEditingTodo(null)}
            />

            <ul className="list-group mt-4">
                {todos.length === 0 ? (
                    <li className="list-group-item text-center text-muted">No todos found.</li>
                ) : (
                    todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            {todo.title}
                            <div>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => setEditingTodo(todo)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;
