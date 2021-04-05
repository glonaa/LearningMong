require("./db/connection");
const { Person } = require("./models/person");
const { Task } = require("./models/Task")

const app = async () => {

    try {

    const person = new Person({ 
    name: "zoe", 
    email: "zoe@gmail.com", 
    age: 21, 
    likesPizza: true,
 });

 await person.save();

const task = new Task({
    todo: "buy a Car",
    completed: false,
});
await task.save(); 
} catch(err) {
    console.log(err);
    }
};


app();