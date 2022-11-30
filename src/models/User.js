import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        phone: {type: String, required: true},
        email: {type: String, required: true},
        endereco: {type: String, required: true}
    },
    {
        versionKey: false
    }
)


const user = mongoose.model('user', userSchema)

export default user
