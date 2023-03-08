class ProjProgress {
   constructor(project, doer) {
      this.project = project;
      this.doer = doer;
   }
}

let all_projects = new Array();

//Додавання нового проекту в колекцію
function add_ProjProg(project, doer) {
   let progress = new ProjProgress(project, doer);
   all_projects.push(progress);
   return progress;
}

/*//Пошук одного проекту в колекції
function find_ProjProg(name, doer) {
   for (let id = 0; id < all_projects.length; id++) {
      let project = all_projects[id];
      if(name === project.name && doer === project.doer) {
         return project;
      }
   }
   return -1;
}

//Редагування проекту в колекції
function edit_ProjProg(name, doer, new_name, new_doer) {
   let project = find_Project(name, doer);
   if(project === -1) {
      return -1;
   }
   let id = all_projects.indexOf(project);
   all_projects[id].name = new_name;
   all_projects[id].doer = new_doer;
   return;
}

//Видалення проекту з колекції
function delete_ProjProg(name, doer) {
   let project = find_Project(name, doer);
   if(project === -1) {
      return -1;
   }
   let id = all_projects.indexOf(project);
   all_projects.splice(id, 1);
   return;
}*/


//Отримання списку проектів на виконанні
function get_progress_list() {
   console.log(`\nList of all projects in progress:`);
   all_projects.forEach(element => {
      console.log(`Project's name: ${element.project.name}, description: ${element.project.description}, client: ${element.project.client.name}, project doer: ${element.doer.name}`);
   });
   /*for (let id = 0; id < all_projects.length; id++) {
      let progress = all_projects[id];
      console.log(`Project's name: ${progress.project.name}, description: ${progress.project.description}, client: ${progress.project.client.name}, project doer: ${progress.doer.name}`);
   }*/
}

//Пошук усіх проектів виконавця
function getDoerProject(doer) {
   console.log(`\n\nList of ${doer.name}'s projects:`)
   all_projects.forEach(element => {
      if(element.doer === doer) {
         console.log(`Project's name: ${element.project.name}, description: ${element.project.description}, client: ${element.project.client.name}`)
      }
   });
   /*for (let id = 0; id < all_projects.length; id++) {
      let progress = all_projects[id];
      if(progress.doer === doer) {
         console.log(`Project's name: ${progress.project.name}, description: ${progress.project.description}, client: ${progress.project.client.name}`)
      }
   }*/
}


exports.add_ProjProg = add_ProjProg
exports.get_progress_list = get_progress_list;
exports.getDoerProject = getDoerProject;

