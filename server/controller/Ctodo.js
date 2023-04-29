const models = require("../models");
exports.main = (req, res) => {
  res.send("hi");
};
// (1)  GET /todos - show all todo
exports.readTodos = async (req, res) => {
  const result = await models.Todo.findAll();
  // console.log("(1) Ctodo.js readTodos findAll >> ", result);
  res.send(result);
  // res.render("todos", { data: result });
};
// (2) POST /todo - create a new todo
exports.createTodo = async (req, res) => {
  const result = await models.Todo.create({
    // id: req.body.id,
    title: req.body.title,
    // done: req.body.done,
    done: false, // todoItem 추가시 false가 기본 값
  });
  // console.log("(2)  Ctodo.js createTodo create >> ", result);
  res.send(result);
};

// (3) PATCH /todo/:todoId - edit a specific todo

exports.updateTodo = async (req, res) => {
  // req.params.id
  // console.log("(3) Ctodo.js updateTodo req.params.id", req.params.id);
  const result = await models.Todo.update(
    {
      // id: req.params.todoId,
      title: req.body.title,
      done: req.body.done,
    },
    {
      where: { id: req.params.todoId },
    }
  );
  // console.log(" (3) Ctodo.js updateTodo update >>", result);
  res.send(true);
};

// (4) DELETE /todo/:todoId - remove a specific todo
exports.deleteTodo = async (req, res) => {
  await models.Todo.destroy({
    where: { id: req.params.todoId },
  });
  // console.log(" (4) Ctodo.js deleteTodo destroy >>", req.params.todoId);
  res.send(true);
};
