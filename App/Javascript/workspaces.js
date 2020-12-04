let db = new Localbase('db');

function loadTable() {
    window.location.replace("../Pages/table.html");
}

function loadIndex() {
    var container = document.getElementById("workspaceContainer");

    //Loads the main page if the database is empty(currently, if there are no tasks in progress)

    db.collection('tasks').get()
    .then(tasks => {
        incompleteSize = 0;
        tasks.forEach(task => {
            if(!task.completed){
                incompleteSize++;
            }
        })
        if(incompleteSize!=0){
            container.innerHTML=``;
        }
    })
}

}