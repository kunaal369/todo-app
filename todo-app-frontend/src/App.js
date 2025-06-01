import React from "react";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">React Todo App</h1>
            <TodoList />
        </div>
    );
}

export default App;
