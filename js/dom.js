const TaskDOM = {
  renderTasks(tasks) {
    const list = document.getElementById("task-list");
    list.innerHTML = "";

    tasks.forEach(task => {
      const li = document.createElement("li");
      li.className = `${task.priority} ${task.completed ? "concluida" : ""}`;

      li.innerHTML = `
        <span>
          ${task.text} | ${task.date}
        </span>
        <div>
          <button onclick="toggleTask(${task.id})">✔</button>
          <button onclick="deleteTask(${task.id})">❌</button>
        </div>
      `;

      list.appendChild(li);
    });
  }
};