//how to connect 
// const { MongoClient } = require('mongodb')


const mongoose = require("mongoose");
require("dotenv").config();


const connection = async () => {
try{
    await mongoose.connect(process.env.MONGO_URI, { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
});
    console.log("successfully connected to glonadb");
} catch (error) {
    console.log(error);
    }
};
//must have to connect to mongo/mongoose
connection();






    // const db = client.db("glonaa");
    // const collection = db.collection("emails");

    //CREATE

    // await collection.insertOne({ name: "gloria", age: "20", favColour: 4},);
    
    // await collection.insertMany([{ email: "glonaax@gmail.com" }, { email: "glorianaa@hotmail.co.uk"}]);
    

    // // //READ

   
    //  const response =  await collection
    //  .updateOne({ email: "glonaax@gmail.com" }, {
    //      $set: { 
    //          email: "gloria@thishasupdated.com",
    //     },
    //  }
    // );

    //  console.log(response);

