class Client {
   constructor(name, budget) {
      this.name = name;
      this.budget = budget;
   }
}

let all_clients = new Array();

//Пошук одного замовника в колекції
function find_Client(name, budget) {
   let res = all_clients.find(e => (name === e.name && budget === e.budget))
   if(res === undefined)
      return -1;
   return res;
}

function check_Client(name, budget) {
   let client = find_Client(name, budget);
   if(client == -1) {
      console.log("This client doesn`t exist")
   } else {
      console.log(`Client's name: ${client.name}, budget: ${client.budget} $`)
   }
}

//Додавання нового замовника в колекцію
function add_Client(name, budget) {
   let client = new Client(name, budget);
   all_clients.push(client);
   return client;
}

//Редагування замовника в колекції
function edit_Client(name, budget, new_name, new_budget) {
   let client = find_Client(name, budget);
   if(client === -1) {
      return -1;
   }
   let id = all_clients.indexOf(client);
   all_clients[id].name = new_name;
   all_clients[id].budget = new_budget;
   return;
}

//Видалення замовника з колекції
function delete_Client(name, budget) {
   let client = find_Client(name, budget);
   if(client === -1) {
      return -1;
   }
   let id = all_clients.indexOf(client);
   all_clients.splice(id, 1);
   return;
}

//Отримання списку замовників 
function get_clients_list() {
   console.log(`\nList of all clients:`);
   for (let id = 0; id < all_clients.length; id++) {
      let client = all_clients[id];
      console.log(`Client's name: ${client.name}, budget: ${client.budget} $`);
   }
}


exports.find_Client = find_Client;
exports.check_Client = check_Client;
exports.add_Client = add_Client;
exports.edit_Client = edit_Client;
exports.delete_Client = delete_Client;
exports.get_clients_list = get_clients_list;

