import restaurant from "../models/Restaurant.js"

class RestaurantController {
    static listAll = (req, res) => {
        restaurant.find((err, restaurant) => {
            res.status(200).json(restaurant)
        })
    }

    static listByID = (req, res) => {
        const id = req.params.id
        restaurant.findById(id, (err, restaurant) => {
            if (err) {
                res.status(400).send({ message: `${err.message} = ID do restaurante não encontrada` })
            } else {
                res.status(200).send(restaurant)
            }
        })
    }

    static create = (req, res) => {
        let newRestaurant = new restaurant(req.body)

        newRestaurant.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err} - falha ao cadastrar restaurante` })
            } else {
                res.status(201).send(newRestaurant.toJSON())
            }
        })
    }

    static update = (req, res) => {
        const id = req.params.id

        restaurant.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Restaurante atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static delete = (req, res) => {
        const id = req.params.id
        restaurant.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Restaurante excluído com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}

export default RestaurantController