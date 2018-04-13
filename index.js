const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

let todoList = [
  {todo : "learn express", done: true},
  {todo: "learn react", done: false},
  {todo: "learn html", done: true},
  {todo: "learn css", done: true},
  {todo: "learn javascript", done: true},
  {todo: "learn git & github", done: true}
];

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use(cors())



app.get("/", (req, res) => {
  res.send("hello world");
});

// app.get('/todo/search', (req, res) => {
//   let searchKey = req.query.todo;
//   let result = todoList.filter(todo =>
//     todo.todo.toLowerCase().includes(searchKey.toLowerCase())
//   );
//   res.send(result);
// });

app.get("/todo/search", (req, res) => {
  let searchtext = req.query.todo
  let find = todoList.filter(todo => {
    return todo.todo.toLowerCase().includes(searchtext.toLowerCase())
  });
  res.send({sucess: true, result: find})

})

app.get("/todo", (req, res) => {
  res.send({ data: todoList });
});



// app.get("/todo", (req, res) => {
//   res.send(todoList);
// });

app.get("/todo/:id", (req, res) => {
  let index = req.params.id;
  let length = todoList.length;

  if (index > length - 1) {
  res.send("not found");
}else {
  res.send({data: todoList[index] });
  console.log(index, length);
}
});



app.post("/todo", (req, res) => {
  let todo = req.body.todo;
  let done = JSON.parse(req.body.done);
  //console.log(typeof done);
  if (todo == "") {
    res.send("todo cannot empty");
  } else {
    let newTodo = {
      todo: todo,
      done: done
    };
    todoList.push(newTodo);
    res.send({ sucess: true, data: newTodo });
  }
});

app.delete("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index > length - 1) {
    res.send({ sucess: false, message: "data not found" });
  } else {
    todoList.splice(index, 1);
    res.send({ success: true, data: todoList });
  }
});



// app.get('/todo/search', (req, res) => {
//   let keyword = req.query.todo
//   let result = todoList.filter(todo => {
//     return todo.todo.toLowerCase().includes(keyword.toLowerCase())
//   })
//   res.send(result)
// })

app.listen(PORT, () => console.log(`localhost:${PORT}`));
