class TodoList{
    constructor(){
        this.tasks = new Map();
    }

    addTask(task_name){
        this.tasks.set(task_name,"[❌]")
    }
    removeTask(task_name){
        if (this.tasks.has(task_name)){
            this.tasks.delete(task_name);
        }
        else{
            return "Task Not Found"
        }
    }
    completedTask(task_name){
        if (this.tasks.has(task_name)){
            this.tasks.set(task_name,"[✓]");
        }
        else{
            return "Task Not Found"
        }
    }
    displayTasks(){
        console.log("Tasks")
        let number = 1
        for(let [key,val] of this.tasks.entries()){
            console.log(number+"."+key , ":" , val);
            number++
        }
    }
}
todo = new TodoList();
todo.addTask("Read A Book")
todo.addTask("Workout")
todo.addTask("Work")
todo.addTask("Study")
todo.completedTask("Read A Book")
todo.displayTasks()

todo.removeTask("Read A Book")