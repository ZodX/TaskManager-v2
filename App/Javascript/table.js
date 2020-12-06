let db = new Localbase('db')

var workspaceName = document.getElementById("workspacename");
workspaceName.innerHTML=sessionStorage.getItem('clicked_workspace');
var groupName = document.getElementById("groupsname");
groupName.innerHTML=sessionStorage.getItem('clicked_group');

function backToGroups(){
    window.location.replace("../Pages/groups.html");
    /*
    try {
        sessionStorage.removeItem('clicked_group');
    } catch (error) {
    }
    */
}

// Searching the current id, by choosing the max from the existent ones and increasing by 1
// or setting it to 1 if there are no tasks

var all_id = [];
db.collection('tasks').get().then(tasks => {
    tasks.forEach(task => {
        all_id.push(task.id);
    });
}).then(function() {
    if (all_id.length > 0) {
        current_id = Math.max(...all_id) + 1;
    } else {
        current_id = 1;
    }})
    .then(function() {
        getAllBtn();
    });

// Handeling add button click


let buttonAdd = document.getElementById("addBtn")
buttonAdd.addEventListener('click', addBtn)

// Creating datetime for the date attribute

function getCurrentDate() {
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear();
            
    return datetime;
}

// Function for the add button, stores the data, then list all the tasks again

function addBtn() {

    var task_name = document.felvesz.addInp1.value;
    var task_description = document.felvesz.addInp2.value;
    var task_priority = document.felvesz.addInp3.value;
    var task_workspace = document.felvesz.addInp4.value;

    if(task_name==="" || task_description==="" || task_priority==="" || task_workspace===""){
        alert("Fill all the fields before adding the task!");
        return;
    }
        
    db.collection('tasks').add({
        id: current_id++,
        name: task_name,
        group: task_description,
        priority: task_priority,
        workspace: task_workspace,
        date: getCurrentDate(),
        completed: false
    }).then(function() {
        var container = document.getElementById("tasksContainer");
        container.innerHTML = ``;
        db.collection('tasks').orderBy('id').get()
        .then(tasks => {
            console.log('tasks: ', tasks)
            getAllBtn();
        })
    })
}

// Lists all the tasks that are in progress

function getAllBtn() {
    var container = document.getElementById("tasksContainer");
    container.innerHTML = ``;

    // Tries to get the clicked_group 

    try {
        group_to_list = sessionStorage.getItem('clicked_group');
        workspace_to_list = sessionStorage.getItem('clicked_workspace');
    } catch (error) {

    }

    db.collection('tasks').orderBy('id').get()
    .then(tasks => {
        console.log('tasks: ', tasks)
        tasks.forEach(task => {
            if (group_to_list == null && workspace_to_list == null && !task.completed) {

                // Listing all tasks

                container.innerHTML += `
                <div class="taskTabletDesktop">
                <p class="col-4">${task.name}</p>
                <p class="col-2">${task.group}</p>
                <p class="col-1">${task.priority}</p>
                <p class="col-2">${task.date}</p>
                        <p class="col-1"><button onclick="doneBtnPressed(this.id)" id="F${task.id}" class="btn btn-success">Done</button></p>
                        <p class="col-1"><button onclick="updateBtnPressed(this.id)" id="U${task.id}" class="btn btn-warning">Modify</button></p>
                        <p class="col-1"><button onclick="deleteBtnPressed(this.id)" id="D${task.id}" class="btn btn-danger">Delete</button></p>
                    </div>
    
                    <div class="taskMobile">
                        <p class="taskMobileLabel"><b>${task.name}</b></p>
                        <p class="taskMobileLabel taskMobileDescription">${task.group}</p>
                        <p class="taskMobileLabel">Priority: ${task.priority}</p>
                        <p class="taskMobileLabel">Last Modified: <i>${task.date}</i></p>
                        <div class="mobileBtnContainer">
                            <button onclick="doneBtnPressed(this.id)" id="F${task.id}" class="btn btn-success">Done</button>
                            <button onclick="updateBtnPressed(this.id)" id="U${task.id}" class="btn btn-warning">Modify</button>
                            <button onclick="deleteBtnPressed(this.id)" id="D${task.id}" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    `;   
                
            } else if (workspace_to_list==null && task.group == group_to_list && !task.completed){

                // Listing specific group without workspace requried

                 
                container.innerHTML += `
                <div class="taskTabletDesktop">
                <p class="col-4">${task.name}</p>
                <p class="col-2">${task.group}</p>
                <p class="col-1">${task.priority}</p>
                <p class="col-2">${task.date}</p>
                        <p class="col-1"><button onclick="doneBtnPressed(this.id)" id="F${task.id}" class="btn btn-success">Done</button></p>
                        <p class="col-1"><button onclick="updateBtnPressed(this.id)" id="U${task.id}" class="btn btn-warning">Modify</button></p>
                        <p class="col-1"><button onclick="deleteBtnPressed(this.id)" id="D${task.id}" class="btn btn-danger">Delete</button></p>
                    </div>
    
                    <div class="taskMobile">
                        <p class="taskMobileLabel"><b>${task.name}</b></p>
                        <p class="taskMobileLabel taskMobileDescription">${task.group}</p>
                        <p class="taskMobileLabel">Priority: ${task.priority}</p>
                        <p class="taskMobileLabel">Last Modified: <i>${task.date}</i></p>
                        <div class="mobileBtnContainer">
                            <button onclick="doneBtnPressed(this.id)" id="F${task.id}" class="btn btn-success">Done</button>
                            <button onclick="updateBtnPressed(this.id)" id="U${task.id}" class="btn btn-warning">Modify</button>
                            <button onclick="deleteBtnPressed(this.id)" id="D${task.id}" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    `;
            } else if (group_to_list == null && task.workspace==workspace_to_list && !task.completed){

                // Listing specific group

                 
                container.innerHTML += `
                <div class="taskTabletDesktop">
                <p class="col-4">${task.name}</p>
                <p class="col-2">${task.group}</p>
                <p class="col-1">${task.priority}</p>
                <p class="col-2">${task.date}</p>
                        <p class="col-1"><button onclick="doneBtnPressed(this.id)" id="F${task.id}" class="btn btn-success">Done</button></p>
                        <p class="col-1"><button onclick="updateBtnPressed(this.id)" id="U${task.id}" class="btn btn-warning">Modify</button></p>
                        <p class="col-1"><button onclick="deleteBtnPressed(this.id)" id="D${task.id}" class="btn btn-danger">Delete</button></p>
                    </div>
    
                    <div class="taskMobile">
                        <p class="taskMobileLabel"><b>${task.name}</b></p>
                        <p class="taskMobileLabel taskMobileDescription">${task.group}</p>
                        <p class="taskMobileLabel">Priority: ${task.priority}</p>
                        <p class="taskMobileLabel">Last Modified: <i>${task.date}</i></p>
                        <div class="mobileBtnContainer">
                            <button onclick="doneBtnPressed(this.id)" id="F${task.id}" class="btn btn-success">Done</button>
                            <button onclick="updateBtnPressed(this.id)" id="U${task.id}" class="btn btn-warning">Modify</button>
                            <button onclick="deleteBtnPressed(this.id)" id="D${task.id}" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    `;
            } else if (task.group==group_to_list && task.workspace==workspace_to_list && !task.completed){

                // Listing specific group

                 
                container.innerHTML += `
                <div class="taskTabletDesktop">
                <p class="col-4">${task.name}</p>
                <p class="col-2">${task.group}</p>
                <p class="col-1">${task.priority}</p>
                <p class="col-2">${task.date}</p>
                        <p class="col-1"><button onclick="doneBtnPressed(this.id)" id="F${task.id}" class="btn btn-success">Done</button></p>
                        <p class="col-1"><button onclick="updateBtnPressed(this.id)" id="U${task.id}" class="btn btn-warning">Modify</button></p>
                        <p class="col-1"><button onclick="deleteBtnPressed(this.id)" id="D${task.id}" class="btn btn-danger">Delete</button></p>
                    </div>
    
                    <div class="taskMobile">
                        <p class="taskMobileLabel"><b>${task.name}</b></p>
                        <p class="taskMobileLabel taskMobileDescription">${task.group}</p>
                        <p class="taskMobileLabel">Priority: ${task.priority}</p>
                        <p class="taskMobileLabel">Last Modified: <i>${task.date}</i></p>
                        <div class="mobileBtnContainer">
                            <button onclick="doneBtnPressed(this.id)" id="F${task.id}" class="btn btn-success">Done</button>
                            <button onclick="updateBtnPressed(this.id)" id="U${task.id}" class="btn btn-warning">Modify</button>
                            <button onclick="deleteBtnPressed(this.id)" id="D${task.id}" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    `;
            }
            });
        })

        // Deleting clicked_group

        /*
        try {
            sessionStorage.removeItem('clicked_group');
        } catch (error) {
        }
        */
}

// Function that handles if the delete button is clicked

function deleteBtnPressed(clicked_id) {
    del_id = clicked_id.substring(1); 
    db.collection('tasks').doc({id: parseInt(del_id)}).delete()
    .then(function() {
        db.collection('tasks').orderBy('id').get()
        .then(tasks => {
            console.log('tasks: ', tasks)
            getAllBtn();
        })
    })
    console.log(clicked_id + " deleted");
}

// Function that handles if the update button is clicked (1st time)

function updateBtnPressed(clicked_id) {
    var taskD = document.getElementById("taskDetails");
    var tasksC = document.getElementById("tasksContainer");
    var activityC = document.getElementById("activityContainer");
    
    tasksC.style.display = "none";
    taskD.style.display = "none";

    activityC.innerHTML = `
    <form name = "modosit">
        <input type="text" name = "updateInp1" placeholder="New task">
        <input type="text" name = "updateInp2" placeholder="New group">
        <input type="text" name = "updateInp3" placeholder="New priority">
        <input type="button" value="Update" id="updateBtn">
    </form>
    `;
    update_id = parseInt(clicked_id.substring(1));
    
    let buttonUpdate = document.getElementById("updateBtn")
    buttonUpdate.addEventListener('click', updateBtn)
}

// Handeling the functionality on the update button (2nd time)

function updateBtn() {
    var task_name = document.modosit.updateInp1.value;
    var task_description = document.modosit.updateInp2.value;
    var task_priority = document.modosit.updateInp3.value;
    var activityC = document.getElementById("activityContainer");
    var taskD = document.getElementById("taskDetails");
    var tasksC = document.getElementById("tasksContainer");
    
    tasksC.style.display = "block";
    taskD.style.display = "flex";

    db.collection('tasks').doc({id: update_id}).set({
        id: update_id,
        name: task_name,
        group: task_description,
        priority: task_priority,
        date: getCurrentDate()
    }).then(function() {
        activityC.innerHTML = `
        <form name = "felvesz">
            <input type="text" name = "addInp1" placeholder="Task">
            <input type="text" name = "addInp2" placeholder="Group">
            <input type="text" name = "addInp3" placeholder="Priority">
            <input type="button" value="Add Task" id="addBtn">
          </form>`;
        getAllBtn();
        let buttonAdd = document.getElementById("addBtn")
        buttonAdd.addEventListener('click', addBtn)
    })
}

// Function that handles if the done button is clicked

function doneBtnPressed(clicked_id) {
    task_id = parseInt(clicked_id.substring(1))

    db.collection('tasks').doc({id: task_id}).update({
        completed: true
    }).then(function() {
        getAllBtn()
    })
}

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});