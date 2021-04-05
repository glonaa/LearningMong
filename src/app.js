require("./db/connection");
const { Person } = require("./models/person")

const app = async () => {
    const person = new Person({ 
    name: "Gloria", 
    email: "Glonaax@hotmail.com", 
    age: 20, 
    likePizza: true,
 });

 await person.save();
};


app();