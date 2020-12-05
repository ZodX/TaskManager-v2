let db = new Localbase('db');

//loadIndex();
getAllWorkspaceOnCards();

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
            getAllWorkspaceOnCards();
        }
    })
}


function getAllWorkspaceOnCards() {
    var container = document.getElementById("workspaceContainer");
    
    container.innerHTML = ``;

    //number_of_tasks = 0;
    let workspaces = new Set();
    let workspaceCounts = new Map();
    let seenGroups = new Set();

    db.collection('tasks').get()
    .then(tasks => { 
        tasks.forEach(task => {
            //Counting workspaces and gorups for each workspace

            if(!task.completed){
                workspaces.add(task.workspace);
            
                if (workspaceCounts.has(task.workspace) && !seenGroups.has(task.group)) {
                    workspaceCounts.set(task.workspace, workspaceCounts.get(task.workspace) + 1)
                } else {
                    workspaceCounts.set(task.workspace, 1);
                }

                seenGroups.add(task.group);
            }
        })
    }).then(function () {
        number_of_workspaces = workspaces.size;
        number_of_rows = number_of_workspaces / 3;
    }).then(function () {
        //Filling up the groups.html with groups if there are more than 1 group.
        //Loading table.html otherwise.
        
        if(number_of_workspaces>1){
        
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
                workspaces.forEach(workspace => {
                
                    //After every third group there is a new row ==> 3 groups per row
                
                    if (count < 3) {
                        currentRow.innerHTML += `
                        <div class="vercitalPh"></div>
                            <div class="groupCard">
                                <div class="groupElementContainer groupCardTitleContainer">
                                    <p class="groupCardTitle">${workspace}</p>
                                </div>
                                <div class="groupElementContainer groupCardCountContainer">
                                    <p class="groupElementsCount">${workspaceCounts.get(workspace)}</p>
                                </div>
                                <div class="groupElementContainer groupElementCountTextContainer">
                                    <p class="groupElementCountText">(Number of groups)</p>
                                </div>
                                <div class="groupElementContainer groupCardBtnContainer">
                                    <button id="${workspace}" onclick="listGroupsPressed(this.id)" class="btn btn-success">List Groups</button>
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
                                    <p class="groupCardTitle">${workspace}</p>
                                </div>
                                <div class="groupElementContainer groupCardCountContainer">
                                    <p class="groupElementsCount">${workspaceCounts.get(workspace)}</p>
                                </div>
                                <div class="groupElementContainer groupElementCountTextContainer">
                                    <p class="groupElementCountText">(Number of groups)</p>
                                </div>
                                <div class="groupElementContainer groupCardBtnContainer">
                                    <button id="${workspace}" onclick="listGroupsPressed(this.id)" class="btn btn-success">List Groups</button>
                                </div>
                            </div>
                        </div>
                        `;
                        currentRow = document.querySelector(".row:last-child");
                    }
                    // If-statement ends here
                });
            }).then(function () {
                if (number_of_workspaces % 3 == 0) {
                    container.innerHTML += `
                        <div class="row">
                        </div>
                        `;
                    currentRow = document.querySelector(".row:last-child");
                    currentRow.innerHTML += `
                    <div class="vercitalPh"></div>
                    <div class="plusCard">
                        <img onclick=""/>
                    </div>
                    `;
                } else {
                    currentRow.innerHTML += `
                    <div class="vercitalPh"></div>
                    <div class="plusCard">
                        <img onclick=""/>
                    </div>
                    `;
                }

                // Listing the groups for mobile view.

                workspaces.forEach(workspace => {
                    container.innerHTML += `
                    <div class="taskMobile">
                        <div class="groupCardMobile">
                            <div class="groupMobileContainer groupMobileTitle">
                                <p class="groupMobileLabel"><b>${workspace}</b></p>
                            </div>
                            <div class="groupMobileContainer groupMobileCount">
                                <p class="groupMobileLabel">${workspaceCounts.get(workspace)}</p>
                            </div>
                            <div class="groupMobileContainer groupMobileDescription">
                                <p class="groupMobileLabel">(Number of groups)</p>
                            </div>
                            <div class="groupMobileContainer groupMobileBtn">
                                <button id="${workspace}" onclick="listGroupsPressed(this.id)" class="btn btn-success">List Groups</button>
                            </div>
                        </div>
                    </div>
                    `;
                })       
            })
        }
        else{
            //Loading the groups.html if there are 1 or less workspaces.

            window.location.replace("../Pages/groups.html");
        }
    })//    
}

function listGroupsPressed(clicked_workspace) {
    sessionStorage.setItem('clicked_workspace', clicked_workspace);
    window.location.replace("../Pages/groups.html");
}

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});