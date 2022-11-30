import express from "express"
import UserController from "../controllers/userController.js"

const router = express.Router()

router
    .get("/user", UserController.listAll)
    .get("/user/:id", UserController.listByID)
    .post("/user", UserController.create)
    .put("/user/:id", UserController.update)
    .delete("/user/:id", UserController.delete)

export default router