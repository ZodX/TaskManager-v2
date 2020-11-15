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

function getCurrentDate() {
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear();

    return datetime;
}