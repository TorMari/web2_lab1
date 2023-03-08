class Doer {
   constructor(name, experience) {
      this.name = name;
      this.experience = experience;
   }
}

let all_doers = new Array();

//Пошук одного виконавця в колекції
function find_Doer(name, experience) {
   /*for (let id = 0; id < all_doers.length; id++) {
      let doer = all_doers[id];
      if(name === doer.name && experience === doer.experience) {
         return doer;
      }
   }
   return -1;*/
   let res = all_doers.find(e => (name === e.name && experience === e.experience))
   if(res === undefined)
      return -1;
   return res;
}

//Додавання нового виконавця в колекцію
function add_Doer(name, experience) {
   let doer = new Doer(name, experience);
   all_doers.push(doer);
   return doer;
}

//Редагування виконавця в колекції
function edit_Doer(name, experience, new_name, new_experience) {
   let doer = find_Doer(name, experience);
   if(doer === -1) {
      return -1;
   }
   let id = all_doers.indexOf(doer);
   all_doers[id].name = new_name;
   all_doers[id].budget = new_experience;
   return;
}

//Видалення виконавця з колекції
function delete_Doer(name, experience) {
   let doer = find_Doer(name, experience);
   if(doer === -1) {
      return -1;
   }
   let id = all_doers.indexOf(doer);
   all_doers.splice(id, 1);
   return;
}

//Отримання списку виконавців 
function get_doers_list() {
   console.log(`\nList of all project doers:`);
   all_doers.forEach(element => {
      console.log(`Project doer's name: ${element.name}, experience: ${element.experience} years`);
   });
   /*for (let id = 0; id < all_doers.length; id++) {
      let doer = all_doers[id];
      console.log(`Project doer's name: ${doer.name}, experience: ${doer.experience} years`);
   }*/
}



exports.find_Doer = find_Doer;
exports.add_Doer = add_Doer;
exports.edit_Doer = edit_Doer;
exports.delete_Doer = delete_Doer;
exports.get_doers_list = get_doers_list;

