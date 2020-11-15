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
    }});

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
        var container = document.getElementById("container");
        container.innerHTML = ``;
        db.collection('tasks').orderBy('id').get()
        .then(tasks => {
            console.log('tasks: ', tasks)
            getAllBtn();
        })
    })
}

function getAllBtn() {
    const container = document.getElementById("container");
    container.innerHTML = ``;

    db.collection('tasks').orderBy('id').get()
        .then(tasks => {
            console.log('tasks: ', tasks)
            tasks.forEach(task => {
                container.innerHTML += `
                <tr>
                  <th scope="row">${task.id}</th>
                  <td>${task.name}</td>
                  <td>${task.description}</td>
                  <td>${task.priority}</td>
                  <td>${task.date}</td>
                  <td><button onclick="updateBtnPressed(this.id)" id="U${task.id}">Update</button></td>
                  <td><button onclick="deleteBtnPressed(this.id)" id="D${task.id}">Delete</button></td>
                </tr>
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
            container.innerHTML = ``;
            getAllBtn();
        })
    })
    console.log(clicked_id + " deleted");
}

function updateBtnPressed(clicked_id) {
    var table = document.getElementById("table");
    table.innerHTML = ``;
    var updateField = document.getElementById("activityContainer");
    updateField.innerHTML = `
    <form name = "modosit">
        Name:
        <input type="text" name = "updateInp1">
        Text:
        <input type="text" name = "updateInp2">
        Prio:
        <input type="text" name = "updateInp3">
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
    var updateField = document.getElementById("activityContainer");
    var table = document.getElementById("table");

    db.collection('tasks').doc({id: update_id}).set({
        id: update_id,
        name: task_name,
        description: task_description,
        priority: task_priority,
        date: getCurrentDate()
    }).then(function() {
        updateField.innerHTML = `
        <form name = "felvesz">
            Name: 
            <input type="text" name = "addInp1">
            Text: 
            <input type="text" name = "addInp2">
            Prio: 
            <input type="text" name = "addInp3">
            <input type="button" value="Add Task" id="addBtn">
          </form>`;
          table.innerHTML = `
          <thead>
            <tr>
                <th>#</th>
                <th>név</th>
                <th>feladat</th>
                <th>prioritás</th>
                <th>utolsó módosítás</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody id="container">
            </tbody>`;
        getAllBtn();
        let buttonAdd = document.getElementById("addBtn")
        buttonAdd.addEventListener('click', addBtn)
    })
}