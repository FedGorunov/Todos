// Получение всех задач
function GetTodos() {
  $.ajax({
    url: "/api/todos",
    type: "GET",
    contentType: "application/json",
    success: function(todos) {
      var rows = "";
      $.each(todos, function(index, todo) {
        // добавляем полученные элементы в таблицу
        rows += row(todo);
      });
      $("table tbody").append(rows);
    }
  });
}
// Получение одной задачи
function GetTodo(id) {
  $.ajax({
    url: "/api/todos/" + id,
    type: "GET",
    contentType: "application/json",
    success: function(todo) {
      var form = document.forms["todoForm"];
      form.elements["id"].value = todo._id;
      form.elements["name"].value = todo.name;
      form.elements["status"].value = todo.status;
    }
  });
}
// создание новой задачи
function CreateTodo(todoName, todoStatus) {
  $.ajax({
    url: "api/todos",
    contentType: "application/json",
    method: "POST",
    data: JSON.stringify({
      name: todoName,
      status: todoStatus
    }),
    success: function(todo) {
      reset();
      $("table tbody").append(row(todo));
    }
  });
}
// Изменение задачи
function EditTodo(todoId, todoName, todoStatus) {
  //debugger;
  console.log('ldldld')
  $.ajax({
    url: "api/todos/" + todoId,
    contentType: "application/json",
    method: "PUT",
    data: JSON.stringify({
      id: todoId,
      name: todoName,
      status: todoStatus
    }),
    success: function(todo) {
      reset();
      $("tr[data-rowid='" + todo._id + "']").replaceWith(row(todo));
    }
  });
}

// сброс формы
function reset() {
  var form = document.forms["todoForm"];
  form.reset();
  form.elements["id"].value = 0;
}

// создание строки для таблицы
var row = function(todo) {
  return (
    "<tr data-rowid='" +
    todo._id +
    "'><td>" +
    todo._id +
    "</td>" +
    "<td>" +
    todo.name +
    "</td> <td>" +
    todo.status +
    "</td>" +
    "<td><a class='editLink' data-id='" +
    todo._id +
    "'>Изменить</a> | " +
    "<a class='removeLink' data-id='" +
    todo._id +
    "'>Удалить</a></td></tr>"
  );
};
// сброс значений формы
$("#reset").click(function(e) {
  e.preventDefault();
  reset();
});

// отправка формы
$("form").submit(function(e) {
  e.preventDefault();
  var id = this.elements["id"].value;
  var name = this.elements["name"].value;
  var status = this.elements["status"].value;
  if (id == 0)
   CreateTodo(name, status);
  else
   EditTodo(id, name, status);
});
  // ссылкa Изменить
  $("body").on("click", ".editLink", function () {
    var id = $(this).data("id");
    GetTodo(id);
})
// загрузка списка всех задач
GetTodos();
