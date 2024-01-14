$.get(URL_ENDPOINT).then(data => {
    data.map(chore => {
       $('tbody').append 
        
    })
})
//:This is to create the chore
class Chore {
constructor(chore) {
this.chore = chore;
this.assignedTo = [];
}
//:This is to add new chores
addChore(chore) {
   this.chore.push(new Chore(chore)); 
}
}
//:This is to assign(read) the chores
class assignedTo {
    constructor(name) {
        this.name = name;
    }
}


class DOMManager {
    static chores;
//:This is to update the chore
    static getChore() {
        Chore.getChore().then(chore => this.render(chores));
    }

    static createChore(name) {
        Chore.createChore(new Chore(name))
        .then(() => {
            return chore.getChores();
        })
        .then((chores) => this.render(chores));
    }
//:This is to delete the chore
    static deleteChore(id) {
        Chore.deleteChore(id)
        .then(() => {
          return Chore.getChores();  
        })
        .then((chores) =>this.render(chores));
    }

    static render(chores) {
       this.chores = chores;
       $('app').empty();
       for (let chore of chores) {
        $('app').prepend(
            `<div id="${chore._id}" class="card">
            <div class="card-header">
            <h2>${chore.name}</h2>
            <button class="btn btn-danger" onclick="DOMManager.deleteChore">Delete</button>
            </div>
            <div class="card-body">
                <div class="card">
                    <div class="row">
                        <div class="col-sm">
                         <input type="text" id="${chore._id}-chore-name" class ="form-control" placeholder="Chore Name"></input>
            </div>
            <div class="col-sm">
            <input type="text" id="${chore._id}-chore-name" class ="form-control" placeholder="Chore Name"></input>
            </div>
            </div>
             <button id="${chore_id}-new-chore" onclick="DOMManager.addChore('${chore_id}')" class="btn btn-primary form-control">Add</button>
            </div>
            </div>
            </div><br>`
            
        );
        for (let chore) 
         $(`#${chore._id}`).find('.card-body').append(
            `<p>
                <span id="chore-${chore._id}"><strong>Chore: </strong> ${chore.name}</span>`
                <button class="btn btn-danger" onclick="DOMManager.deleteChore('${chore._id}',)">Delete Chore</button>`
          );  
        }
       }
    }
}

$('#create-new-chore').click(() =>{
    DOMManager.createChore($('#new-chore-name').val());
    $('#new-chore-name').val('');
});

DOMManager.getChores()