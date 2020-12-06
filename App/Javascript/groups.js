let db = new Localbase('db');

getAllGroupsOnCards();

function getAllGroupsOnCards() {
    var container = document.getElementById("container");
    
    container.innerHTML = ``;

    number_of_tasks = 0;
    let groups = new Set();
    let groupCounts = new Map();

    db.collection('tasks').get()
    .then(tasks => {

        current_workspace = sessionStorage.getItem('clicked_workspace');

        tasks.forEach(task => {
            //Counting groups and group tasks.

            if(!task.completed && (task.workspace==current_workspace || current_workspace==null)){
                groups.add(task.group);

                if (groupCounts.has(task.group)) {
                    groupCounts.set(task.group, groupCounts.get(task.group) + 1)
                } else {
                    groupCounts.set(task.group, 1);
                }
            }
        })
    }).then(function () {
        number_of_groups = groups.size;
        number_of_rows = number_of_groups / 3;
    }).then(function () {
        //Filling up the groups.html with groups if there are more than 1 group.
        //Loading table.html otherwise.
        
        if(groups.size>-1){
        
            count = 0;
            
            //Adding the first row and setting the currentRow.

            if (number_of_rows > 0) {
                container.innerHTML += `
                        <div class="row rowTabletDesktop">
                        </div>
                        `;
                var currentRow = document.querySelector(".row:last-child");
            }

            //Looping through the tasks.

            db.collection('tasks').orderBy('id').get()
            .then(tasks => {
                console.log('tasks: ', tasks);
                groups.forEach(group => {
                
                    //After every third group there is a new row ==> 3 groups per row
                
                    if (count < 3) {
                        currentRow.innerHTML += `
                        <div class="vercitalPh"></div>
                            <div class="groupCard">
                                <div class="groupElementContainer groupCardTitleContainer">
                                    <p class="groupCardTitle">${group}</p>
                                </div>
                                <div class="groupElementContainer groupCardCountContainer">
                                    <p class="groupElementsCount">${groupCounts.get(group)}</p>
                                </div>
                                <div class="groupElementContainer groupElementCountTextContainer">
                                    <p class="groupElementCountText">(Number of tasks)</p>
                                </div>
                                <div class="groupElementContainer groupCardBtnContainer">
                                    <button id="${group}" onclick="listTasksPressed(this.id)" class="btn btn-success">List Tasks</button>
                                </div>
                            </div>
                        `;
                        count++;
                    } else {
                        count = 1;
                        container.innerHTML += `
                        <div class="row rowTabletDesktop">
                            <div class="vercitalPh"></div>
                            <div class="groupCard">
                                <div class="groupElementContainer groupCardTitleContainer">
                                    <p class="groupCardTitle">${group}</p>
                                </div>
                                <div class="groupElementContainer groupCardCountContainer">
                                    <p class="groupElementsCount">${groupCounts.get(group)}</p>
                                </div>
                                <div class="groupElementContainer groupElementCountTextContainer">
                                    <p class="groupElementCountText">(Number of tasks)</p>
                                </div>
                                <div class="groupElementContainer groupCardBtnContainer">
                                    <button id="${group}" onclick="listTasksPressed(this.id)" class="btn btn-success">List Tasks</button>
                                </div>
                            </div>
                        </div>
                        `;
                        currentRow = document.querySelector(".row:last-child");
                    }
                    // If-statement ends here
                });
            }).then(function () {
                /*
                if (number_of_groups % 3 == 0) {
                    container.innerHTML += `
                        <div class="row">
                        </div>
                        `;
                    currentRow = document.querySelector(".row:last-child");
                    currentRow.innerHTML += `
                    <div class="vercitalPh"></div>
                    <div class="plusCard">
                        <img onclick="newGroupBtnPressed()"/>
                    </div>
                    `;
                    console.log("tasknumber: " + number_of_groups)
                    console.log(number_of_groups % 3)
                } else {
                    currentRow.innerHTML += `
                    <div class="vercitalPh"></div>
                    <div class="plusCard">
                        <img onclick="newGroupBtnPressed()"/>
                    </div>
                    `;
                }
                */

                // Listing the groups for mobile view.

                groups.forEach(group => {
                    container.innerHTML += `
                    <div class="taskMobile">
                        <div class="groupCardMobile">
                            <div class="groupMobileContainer groupMobileTitle">
                                <p class="groupMobileLabel"><b>${group}</b></p>
                            </div>
                            <div class="groupMobileContainer groupMobileCount">
                                <p class="groupMobileLabel">${groupCounts.get(group)}</p>
                            </div>
                            <div class="groupMobileContainer groupMobileDescription">
                                <p class="groupMobileLabel">(Number of tasks)</p>
                            </div>
                            <div class="groupMobileContainer groupMobileBtn">
                                <button id="${group}" onclick="listTasksPressed(this.id)" class="btn btn-success">List Tasks</button>
                            </div>
                        </div>
                    </div>
                    `;
                })       
            })
        }
        else{
            //Loading the table.html if there are 1 or less groups.

            window.location.replace("../Pages/table.html");
        }
    })//    
}

function listTasksPressed(clicked_group) {
    sessionStorage.setItem('clicked_group', clicked_group);
    window.location.replace("../Pages/table.html");
}

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});