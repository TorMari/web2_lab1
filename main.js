const mod = require('./custom_module/module');

//Додавання нового замовника в колекцію
console.log("\n\nAdd new clients");
let cl1 = mod.add_Client("DEK", 100000);
let cl2 = mod.add_Client("Betaface", 550000);
let cl3 = mod.add_Client("Techpro", 230000);
let cl4 = mod.add_Client("Infoplus", 775000);
mod.get_clients_list();

//Редагування замовника в колекції
console.log("\n\nChange budget of client Betaface to 120000 $");
mod.edit_Client("Betaface", 550000, "Betaface", 120000);
mod.get_clients_list();

//Видалення замовника з колекції
console.log("\n\nDelete client Techpro");
mod.delete_Client("Techpro", 230000);
mod.get_clients_list();

//Пошук одного замовника в колекції
console.log("\n\nFind client Infoplus");
mod.check_Client("Infoplus", 775000);
console.log("\nFind client Techpro");
mod.check_Client("Techpro", 230000);

//Додавання проекту в колекцію
console.log("\n\nAdd new projects");
let p1 = mod.add_Project("project1", "Beb-site creation", cl2);
let p2 = mod.add_Project("project2", "Progect developing", cl4);
let p3 = mod.add_Project("project3", "Ensuring data security", cl1);
let p4 = mod.add_Project("project4", "Launching a mobile app", cl1);
mod.get_projects_list();

//Редагування проекту в колекції
console.log("\n\nChange client of project4 to Betaface");
mod.edit_Project("project4", "Launching a mobile app", "project4", "Launching a mobile app", cl2)
mod.get_projects_list();

//Видалення проекту з колекції
console.log("\n\nDelete project2");
mod.delete_Project("project2", "Progect developing")
mod.get_projects_list();

//Додавання виконавця в колекцію
console.log("\n\nAdd new project doers");
let d1 = mod.add_Doer("CyberInc", 5);
let d2 = mod.add_Doer("CodeBright", 3);
let d3 = mod.add_Doer("NextTech", 7);
let d4 = mod.add_Doer("AInfo", 10);
mod.get_doers_list();

//Редагування виконавця в колекції
console.log("\n\nChange AInfo name to AMService");
mod.edit_Doer("AInfo", 10, "AMService", 10);
mod.get_doers_list();

//Видалення виконавця з колекції
console.log("\n\nDelete project doer NextTech");
mod.delete_Doer("NextTech", 7)
mod.get_doers_list();

//Додавання проекту на виконання
console.log("\n\nTake on project1 by CodeBright\nTake on project3 by CyberInc");
mod.add_ProjProg(p1, d2);
mod.add_ProjProg(p3, d1);
mod.get_projects_list();
mod.get_progress_list();

//Пошук усіх проектів замовника
mod.getClientProject(cl2);

//Пошук усіх проектів виконавця
mod.getDoerProject(d1)