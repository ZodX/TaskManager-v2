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
        tasks.forEach(task => {
            groups.add(task.group);

            if (groupCounts.has(task.group)) {
                groupCounts.set(task.group, groupCounts.get(task.group) + 1)
            } else {
                groupCounts.set(task.group, 1);
            }
        })
    }).then(function () {
        console.log(number_of_tasks);
        number_of_groups = groups.size;
        number_of_rows = number_of_groups / 3;
        console.log(Math.ceil(number_of_rows))
        console.log(groups);
        console.log(groupCounts);
    }).then(function () {
        count = 0;
        
        if (number_of_rows > 0) {
            container.innerHTML += `
                    <div class="row rowTabletDesktop">
                    </div>
                    `;
            var currentRow = document.querySelector(".row:last-child");
        }

        db.collection('tasks').orderBy('id').get()
        .then(tasks => {
            console.log('tasks: ', tasks);
            groups.forEach(group => {
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
            });
        }).then(function () {
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
                            <button class="btn btn-success">List Tasks</button>
                        </div>
                    </div>
                </div>
                `;
            })       
        })
    })    
}

function listTasksPressed(clicked_group) {
    console.log(clicked_group);
    sessionStorage.setItem('clicked_group', clicked_group);
    window.location.replace("../Pages/table.html");
}