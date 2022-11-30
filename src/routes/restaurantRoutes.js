import express from "express"
import RestaurantController from "../controllers/restaurantController.js"

const router = express.Router()

router
    .get("/restaurant", RestaurantController.listAll)
    .get("/restaurant/:id", RestaurantController.listByID)
    .post("/restaurant", RestaurantController.create)
    .put("/restaurant/:id", RestaurantController.update)
    .delete("/restaurant/:id", RestaurantController.delete)

export default router