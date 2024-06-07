// const { getAlltodos, addTodo, updateTodo, deleteTodo } = require("../controller/Todocontroller")

const { getAlltodos, addTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")

const router = require("express").Router()


router
    .get("/", getAlltodos)
    .post("/", addTodo)
    .put("/:id", updateTodo)
    .delete("/:id", deleteTodo)

module.exports = router