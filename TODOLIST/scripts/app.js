class TodoList{
    constructor(){
        this.tasks = new Map();
    }

    addTask(task_name){
        this.tasks.set(task_name,"[❌]");
        this.displayTasks();
    }
    removeTask(task_name){
        if (this.tasks.has(task_name)){
            this.tasks.delete(task_name);
            
        }
        else{
            alert("Task not found");
        }
        this.displayTasks();
    }
    completedTask(task_name){
        if (this.tasks.has(task_name)){
            this.tasks.set(task_name,"[✓]");
        }
        else{
            alert("Task not found");
        }
        this.displayTasks();
    }
    displayTasks(){
        console.log("Tasks")
        const tasksDisplay = document.getElementById("tasksDisplay");
        tasksDisplay.innerHTML = "";
        let number = 1
        for(let [key,val] of this.tasks.entries()){
            const taskElement = document.createElement('li');
            taskElement.innerHTML = `
            <span class="${val === '[✓]' ? 'completed' : ''}">${number}. ${key} : ${val}</span>
            <button class="complete-btn" onclick="todo.completedTask('${key}')">Complete</button>
            <button class="remove-btn" onclick="todo.removeTask('${key}')">Remove</button>
        `;
            tasksDisplay.appendChild(taskElement);
            console.log(number+"."+key , ":" , val);
            number++
        }
    }
}
todo = new TodoList();

document.getElementById('addTaskBtn').addEventListener('click',() => {
    const taskName = document.getElementById("taskName").value.trim();
    if(taskName !== ""){
        todo.addTask(taskName);
        document.getElementById("taskName").value = "";
        todo.displayTasks();
    }
    else{
        alert("Please enter a taskname")
    }
})


todo.addTask("Read A Book")
todo.addTask("Workout")
todo.addTask("Work")
todo.addTask("Study")
todo.completedTask("Read A Book")
todo.displayTasks()

todo.removeTask("Read A Book")