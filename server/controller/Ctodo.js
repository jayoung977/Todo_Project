const models = require("../models");
exports.main = (req, res) => {
  res.send("hi");
};
// (1)  GET /todos - show all todo
exports.getTodo = async (req, res) => {
  const result = await models.Todo.findAll();
  console.log("(1) Ctodo.js getTodo findAll >> ", result);
  res.send(result);
  // res.render("todos", { data: result });
};
// (2) POST /todo - create a new todo
exports.postTodo = async (req, res) => {
  const result = await models.Todo.create({
    id: req.body.id,
    title: req.body.title,
    done: req.body.done,
  });
  console.log("(2)  Ctodo.js postTodo create >> ", result);
  res.send(result);
};

// (3) PATCH /todo/:todoId - edit a specific todo

exports.patchTodo = async (req, res) => {
  // req.params.id
  console.log("(3) Ctodo.js patchTodo req.params.id", req.params.id);
  const result = await models.Todo.update(
    {
      id: req.params.todoId,
      title: req.body.title,
      done: req.body.done,
    },
    {
      where: { id: req.params.todoId },
    }
  );
  console.log(" (3) Ctodo.js patchTodo update >>", result);
  res.end();
};

// (4) DELETE /todo/:todoId - remove a specific todo
exports.deleteTodo = async (req, res) => {
  await models.Todo.destroy({
    where: { id: req.params.todoId },
  });
  console.log(" (4) Ctodo.js deleteTodo destroy >>", req.params.todoId);
  res.end();
};
