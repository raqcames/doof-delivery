import mongoose from "mongoose";

mongoose.connect("mongodb+srv://projeto:projeto@cluster0.v2myxcq.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection

export default db