import user from "../models/User.js"

class UserController {
    static listAll = (req, res) => {
        user.find((err, user) => {
            res.status(200).json(user)
        })
    }

    static listByID = (req, res) => {
        const id = req.params.id
        user.findById(id, (err, user) => {
            if (err) {
                res.status(400).send({ message: `${err.message} = ID da pessoa não encontrada` })
            } else {
                res.status(200).send(user)
            }
        })
    }

    static create = (req, res) => {
        let newUser = new user(req.body)

        newUser.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err} - falha ao cadastrar pessoa` })
            } else {
                res.status(201).send(newUser.toJSON())
            }
        })
    }

    static update = (req, res) => {
        const id = req.params.id

        user.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Pessoa atualizada com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static delete = (req, res) => {
        const id = req.params.id
        user.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Pessoa excluída com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}

export default UserController