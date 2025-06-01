const sequelize = require("../config/database");
const Todo = require("./todo.model");

const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("Database synced successfully!");
    } catch (error) {
        console.error("Error syncing database:", error);
    }
};

module.exports = { Todo, syncDatabase };
