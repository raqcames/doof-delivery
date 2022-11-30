import express from "express"
import user from "./userRoutes.js"
import food from "./foodRoutes.js"
import restaurant from "./restaurantRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Inicio")
    })

    app.use(
        express.json(),
        user,
        restaurant,
        food
    )
}

export default routes