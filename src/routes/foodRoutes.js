import express from "express"
import FoodController from "../controllers/foodController.js"

const router = express.Router()

router
    .get("/food", FoodController.listAll)
    .get("/food/restaurant", FoodController.listByRestaurant)
    .get("/food/:id", FoodController.listByID)
    .post("/food", FoodController.create)
    .put("/food/:id", FoodController.update)
    .delete("/food/:id", FoodController.delete)

export default router