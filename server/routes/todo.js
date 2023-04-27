const express = require("express");
const controller = require("../controller/Ctodo");
const router = express.Router();

router.get("/", controller.main);
// (1) GET /todos - show all todo
router.get("/todos", controller.getTodo); // 전체 조회

// (2) POST /todo - create a new todo
router.post("/todo", controller.postTodo); //하나 추가(생성)

// (3) PATCH /todo/:todoId - edit a specific todo
router.post("/todo/:todoId", controller.patchTodo); // 하나 조회/수정

// (4) DELETE /todo/:todoId - remove a specific todo
router.delete("/todo/:todoId", controller.deleteTodo); //하나 삭제

module.exports = router;
