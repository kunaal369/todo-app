import React, { useState, useEffect } from "react";
import { addTodo, updateTodo } from "../api";

function TodoForm({ onSuccess, editMode, existingTodo, onCancel }) {
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (editMode && existingTodo) {
            setTitle(existingTodo.title);
        }
    }, [editMode, existingTodo]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        if (editMode && existingTodo) {
            await updateTodo(existingTodo.id, { title });
        } else {
            await addTodo({ title });
        }

        setTitle("");
        if (onSuccess) onSuccess();
    };

    return (
        <form className="mt-4" onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder={editMode ? "Update todo..." : "Enter todo..."}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className={`btn ${editMode ? "btn-success" : "btn-primary"}`} type="submit">
                    {editMode ? "Update" : "Add"}
                </button>
                {editMode && (
                    <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}

export default TodoForm;
