import mongoose from "mongoose";


export default async function connect(){
    const URL=process.env.DB_URL+process.env.DB_NAME
    console.log(URL);
    const db= await mongoose.connect(URL)
    console.log("Database Connected");
    return db
}