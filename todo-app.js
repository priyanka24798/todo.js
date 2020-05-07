let taskList = []



class Task {
    constructor(name, currdate, dueDate, isDone) {
        this.taskId = Date.now();
        this.name = name;
        this.dueDate = dueDate;
        this.currdate = currdate;
        this.isDone = isDone;
    }

    toString() {
        let htmlText = '<li class="task" ><div>'
        htmlText += this.name
        htmlText += ", " + "Current Date : " + this.currdate.getDate() +
                    "-" + this.currdate.getMonth() +
                    "-" + this.currdate.getFullYear();
        htmlText += ", " + "Due Date : "+ this.dueDate;
        
        htmlText += '<input type="checkbox" onclick = "check()" name="isDone" id="isDone">'
        htmlText += '<button onclick="deleteTask(';
        htmlText += this.taskId;
        htmlText += ')">Delete</button>';
        htmlText += '</div></li>';
        return htmlText;
    }
}

function render() {
    const listUI = document.getElementById("todolist")
    listUI.innerHTML = "";
    if (taskList.length === 0) listUI.innerHTML = "No tasks todo :-)"
    taskList.forEach((task) => {
      
        listUI.innerHTML += task.toString();
    })
}


function check() {
    const check = document.getElementById("idDone")
    console.log("completed");
    
}
    
    


function deleteTask(taskId) {
    taskList = taskList.filter(
        (t) => {
            if(t.taskId != taskId) 
            return t;
        }
    );
    // call a web api to update the database on the server
    
    // update the DOM
    render()
   
    console.log(taskList);
}

function createTask() {
    const taskName = document.getElementById("taskName").value;
    const date = document.getElementById("pickdate").value;

    const done = document.getElementById("isDone").value;
    console.log(done)

    addTask(new Task(taskName, new Date(), date, false));
}

function addTask(t) {
    taskList.push(t)
    // call a web api to update the database on the server
    render();
   
    console.log(taskList)
}

function init() {
    console.log("init called");

    // call a web api to retrieve the task list
    // write a function to send a api request
    // get the JSON
    // assign it to taskList
    // render

    task = new Task("welcome task", new Date ("June 7, 2020"), new Date("July 7 , 2020"), false);
    addTask(task);
    console.log(task);
}

init();