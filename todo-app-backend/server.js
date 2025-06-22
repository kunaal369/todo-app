const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { syncDatabase } = require("./models");
const todoRoutes = require("./routes/todo.routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:3000", "http://13.201.1.210:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api/todos", todoRoutes);

syncDatabase();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
