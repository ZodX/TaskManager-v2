let db = new Localbase('db')

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

let buttonAdd = document.getElementById("addBtn")
buttonAdd.addEventListener('click', addBtn)

function getCurrentDate() {
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear();

    return datetime;
}



function addBtn() {
    var task_name = document.felvesz.addInp1.value;
    var task_description = document.felvesz.addInp2.value;
    var task_priority = document.felvesz.addInp3.value;

    db.collection('tasks').add({
        id: current_id++,
        name: task_name,
        description: task_description,
        priority: task_priority,
        date: getCurrentDate()
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

function getAllBtn() {
    var container = document.getElementById("tasksContainer");
    container.innerHTML = ``;

    db.collection('tasks').orderBy('id').get()
        .then(tasks => {
            console.log('tasks: ', tasks)
            tasks.forEach(task => {
                container.innerHTML += `
                <div class="taskTabletDesktop">
                    <p class="col-2">${task.name}</p>
                    <p class="col-4">${task.description}</p>
                    <p class="col-1">${task.priority}</p>
                    <p class="col-2">${task.date}</p>
                    <p class="col-1"><button class="btn btn-success">Done</button></p>
                    <p class="col-1"><button onclick="updateBtnPressed(this.id)" id="U${task.id}" class="btn btn-warning">Modify</button></p>
                    <p class="col-1"><button onclick="deleteBtnPressed(this.id)" id="D${task.id}" class="btn btn-danger">Delete</button></p>
                </div>

                <div class="taskMobile">
                    <p class="taskMobileLabel"><b>${task.name}</b></p>
                    <p class="taskMobileLabel taskMobileDescription">${task.description}</p>
                    <p class="taskMobileLabel">Priority: ${task.priority}</p>
                    <p class="taskMobileLabel">Last Modified: <i>${task.date}</i></p>
                    <div class="mobileBtnContainer">
                        <button class="btn btn-success">Done</button>
                        <button onclick="updateBtnPressed(this.id)" id="U${task.id}" class="btn btn-warning">Modify</button>
                        <button onclick="deleteBtnPressed(this.id)" id="D${task.id}" class="btn btn-danger">Delete</button>
                    </div>
                </div>
                `;   
            });
        })
}

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

function updateBtnPressed(clicked_id) {
    var taskD = document.getElementById("taskDetails");
    var tasksC = document.getElementById("tasksContainer");
    var activityC = document.getElementById("activityContainer");
    
    tasksC.style.display = "none";
    taskD.style.display = "none";

    activityC.innerHTML = `
    <form name = "modosit">
        <input type="text" name = "updateInp1" placeholder="New name">
        <input type="text" name = "updateInp2" placeholder="New description">
        <input type="text" name = "updateInp3" placeholder="New priority">
        <input type="button" value="Update" id="updateBtn">
    </form>
    `;
    update_id = parseInt(clicked_id.substring(1));
    
    let buttonUpdate = document.getElementById("updateBtn")
    buttonUpdate.addEventListener('click', updateBtn)
}

function updateBtn() {
    var task_name = document.modosit.updateInp1.value;
    var task_description = document.modosit.updateInp2.value;
    var task_priority = document.modosit.updateInp3.value;
    var activityC = document.getElementById("activityContainer");
    var table = document.getElementById("tasksContainer");
    var taskD = document.getElementById("taskDetails");
    var tasksC = document.getElementById("tasksContainer");
    
    tasksC.style.display = "block";
    taskD.style.display = "flex";

    db.collection('tasks').doc({id: update_id}).set({
        id: update_id,
        name: task_name,
        description: task_description,
        priority: task_priority,
        date: getCurrentDate()
    }).then(function() {
        activityC.innerHTML = `
        <form name = "felvesz">
            <input type="text" name = "addInp1" placeholder="Name">
            <input type="text" name = "addInp2" placeholder="Description">
            <input type="text" name = "addInp3" placeholder="Priority">
            <input type="button" value="Add Task" id="addBtn">
          </form>`;
          table.innerHTML = `
          <table id="table" class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scopce="col">Date</th>
                <th scopce="col"></th>
                <th scopce="col"></th>
              </tr>
            </thead>
            <tbody id="container"></tbody></table>`;
        getAllBtn();
        let buttonAdd = document.getElementById("addBtn")
        buttonAdd.addEventListener('click', addBtn)
    })
}