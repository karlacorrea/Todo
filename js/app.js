let tasks = Storage.getTasks();

document.getElementById("task-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const text = document.getElementById("task-input").value;
  const priority = document.getElementById("priority").value;
  const date = document.getElementById("due-date").value;

  const newTask = {
    id: Date.now(),
    text,
    priority,
    date,
    completed: false
  };

  tasks.push(newTask);
  Storage.saveTasks(tasks);
  TaskDOM.renderTasks(tasks);

  this.reset();
});

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

  Storage.saveTasks(tasks);
  TaskDOM.renderTasks(tasks);
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  Storage.saveTasks(tasks);
  TaskDOM.renderTasks(tasks);
}

// Inicialização
TaskDOM.renderTasks(tasks);