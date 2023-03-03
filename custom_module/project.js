class Project {
   constructor(name, description, client) {
      this.name = name;
      this.description = description;
      this.client = client;
   }
}

let all_projects = new Array();

//Пошук одного проекту в колекції
function find_Project(name, description) {
   for (let id = 0; id < all_projects.length; id++) {
      let project = all_projects[id];
      if(name === project.name && description === project.description) {
         return project;
      }
   }
   return -1;
}

//Додавання нового проекту в колекцію
function add_Project(name, description, client) {
   let project = new Project(name, description, client);
   all_projects.push(project);
   return project;
}

//Редагування проекту в колекції
function edit_Project(name, description, new_name, new_description, new_client) {
   let project = find_Project(name, description);
   if(project === -1) {
      return -1;
   }
   let id = all_projects.indexOf(project);
   all_projects[id].name = new_name;
   all_projects[id].description = new_description;
   all_projects[id].client = new_client;
   return;
}

//Видалення проекту з колекції
function delete_Project(name, description) {
   let project = find_Project(name, description);
   if(project === -1) {
      return -1;
   }
   let id = all_projects.indexOf(project);
   all_projects.splice(id, 1);
   return;
}

//Отримання списку проектів 
function get_projects_list() {
   console.log(`\nList of all projects:`);
   for (let id = 0; id < all_projects.length; id++) {
      let project = all_projects[id];
      console.log(`Project's name: ${project.name}, description: ${project.description}, client: ${project.client.name}`);
   }
}

//Пошук усіх проектів замовника
function getClientProject(client) {
   console.log(`\n\nList of ${client.name}'s projects:`)
   for (let id = 0; id < all_projects.length; id++) {
      let project = all_projects[id];
      if(project.client === client) {
         console.log(`Project's name: ${project.name}, description: ${project.description}`)
      }
   }
}



exports.find_Project = find_Project;
exports.add_Project = add_Project;
exports.edit_Project = edit_Project;
exports.delete_Project = delete_Project;
exports.get_projects_list = get_projects_list;
exports.getClientProject = getClientProject;

