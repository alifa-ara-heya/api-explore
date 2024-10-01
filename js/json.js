const user = {id: 1, name: 'Sakib', job: 'husband'};

//javascript opbject notation (JSON)
const stringified = JSON.stringify(user);
console.log(user); //{ id: 1, name: 'Sakib', job: 'husband' }
console.log(stringified); //{"id":1,"name":"Sakib","job":"husband"}

const userObj = JSON.parse(stringified);
console.log(userObj); //{ id: 1, name: 'Sakib', job: 'husband' }