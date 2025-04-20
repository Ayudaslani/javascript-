let alltask = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
};
const addtask = () => {
    let taskadd = document.getElementById('taskadd').value;

    let row = {
        id: Math.floor(Math.random() * 100),
        taskadd: taskadd
    }
    let old = [...alltask(), row];
    localStorage.setItem('todo', JSON.stringify(old));
    document.getElementById('taskadd').value = " ";
    view();

}
const view = () => {
    document.getElementById('edit').style.display = "none";
    let taskadd = document.getElementById('taskadd').value;
    let data = alltask();
    let tbl = " ";
    data.map((val) => {
        tbl += `
           <li>
            ${val.taskadd}
            <div>
            <button class="btn btn-sm btn-check-done" onclick="edittask(${val.id})">
              ✔️
            </button>
            <button class="btn btn-sm btn-delete" onclick="deletetask(${val.id})">
              ❌
            </button>
            </div>
           </li>
        
          `
    })
    document.getElementById('taskList').innerHTML = tbl;

}
view();

const deletetask = (id) => {
    let data = alltask();

    let del = data.filter((val) => {
        if (val.id != id) {
            return val;
        }
    })
    localStorage.setItem('todo', JSON.stringify(del));
    alert("Deleted task");
    view();

}
const edittask = (id) => {
    document.getElementById('edit').style.display = "block";
    document.getElementById('add').style.display = "none";
    let data = alltask();

    let up = data.find((val) => {
        if (val.id == id) {
            return val;
        }
    })
    document.getElementById('taskadd').value = up.taskadd;
    document.getElementById('editid').value = up.id;

}
const updatetask = () => {
    let data = alltask();
    let taskadd = document.getElementById('taskadd').value;
    let id = document.getElementById('editid').value;

    let edit = data.map((val) => {
        if (val.id == id) {
            val.taskadd = taskadd
        }
        return val;
    })
    localStorage.setItem('todo', JSON.stringify(edit));
    document.getElementById('add').style.display = "block";
    document.getElementById('edit').style.display = "none";

    document.getElementById('taskadd').value = " ";
    view();
}
const searchtask = () => {
    let searchTerm = document.getElementById('taskadd').value;
    let data = alltask();

    let filtered = data.filter((val) => {
        return val.taskadd.includes(searchTerm);
    });

    let tbl = "";
    filtered.map((val) => {
        tbl += `
            <li>
                ${val.taskadd}
                <div>
                    <button class="btn btn-sm btn-check-done" onclick="edittask(${val.id})">✔️</button>
                    <button class="btn btn-sm btn-delete" onclick="deletetask(${val.id})">❌</button>
                </div>
            </li>
        `;
    });

    document.getElementById('taskList').innerHTML = tbl;
};



const resettask = () => {
    let data = alltask();

    localStorage.setItem('todo', JSON.stringify(data));
    document.getElementById('taskadd').value = " ";
    view();


}