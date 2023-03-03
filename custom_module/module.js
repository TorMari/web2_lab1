const client = require("./client");
const project = require("./project");
const project_doer = require("./project_doer");
const progress = require("./progress");

exports.find_Client = client.find_Client;
exports.check_Client = client.check_Client;
exports.add_Client = client.add_Client;
exports.edit_Client = client.edit_Client;
exports.delete_Client = client.delete_Client;
exports.get_clients_list = client.get_clients_list;

exports.find_Project = project.find_Project;
exports.add_Project = project.add_Project;
exports.edit_Project = project.edit_Project;
exports.delete_Project = project.delete_Project;
exports.get_projects_list = project.get_projects_list;
exports.getClientProject = project.getClientProject;

exports.find_Doer = project_doer.find_Doer;
exports.add_Doer = project_doer.add_Doer;
exports.edit_Doer = project_doer.edit_Doer;
exports.delete_Doer = project_doer.delete_Doer;
exports.get_doers_list = project_doer.get_doers_list;

exports.add_ProjProg = progress.add_ProjProg
exports.get_progress_list = progress.get_progress_list;
exports.getDoerProject = progress.getDoerProject;



