import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
    {
        id: { type: String },
        cnpj: { type: String, required: true },
        name: { type: String, required: true },
    },
    {
        versionKey: false
    }
)


const restaurant = mongoose.model('restaurant', restaurantSchema)

export default restaurant
