import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<user>:<password>@alura.qptoa.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
