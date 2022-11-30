import food from "../models/Food.js"

class FoodController {
    static listAll = (req, res) => {
        food.find()
            .populate('restaurant')
            .exec((err, food) => {
                res.status(200).json(food)
            })
    }

    static listByID = (req, res) => {
        const id = req.params.id
        food.findById(id)
            .populate('restaurant', 'name')
            .exec((err, food) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} = ID da comida não encontrada` })
                } else {
                    res.status(200).send(food)
                }
            })
    }

    static create = (req, res) => {
        let newFood = new food(req.body)

        newFood.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err} - falha ao cadastrar comida` })
            } else {
                res.status(201).send(newFood.toJSON())
            }
        })
    }

    static update = (req, res) => {
        const id = req.params.id

        food.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Comida atualizada com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static delete = (req, res) => {
        const id = req.params.id
        food.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Comida excluída com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static listByRestaurant = (req, res) => {
        const restaurant = req.query.cnpj

        food.find({ 'cnpj': restaurant }, {}, (err, food) => {
            res.status(200).send(food)
        })
    }
}

export default FoodController