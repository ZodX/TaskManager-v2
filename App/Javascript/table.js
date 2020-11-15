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
                  <td><button onclick="updateBtnPressed(this.id)" id="U${task.id}">Modify</button></td>
                  <td><button onclick="deleteBtnPressed(this.id)" id="D${task.id}">Delete</button></td>
                </tr>
                `;
            });
        })
}