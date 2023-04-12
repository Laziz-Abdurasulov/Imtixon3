const { Router } = require('express');
const { GET, POST, PUT, DELETE } = require("../controllers/todo.controller");

const router = Router();


router.get("/todos", GET);
router.get("/todo/:id", GET);
router.post("/todos", POST);
router.put("/todo/:id", PUT);
router.delete("/todos/:id", DELETE);

module.exports = { router };