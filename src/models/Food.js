import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        value: { type: Number, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'restaurant', required: true },
    },
    {
        versionKey: false
    }
)


const food = mongoose.model('food', foodSchema)

export default food
