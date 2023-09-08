const db = require("../db/db")

const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios"
    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

const addUser = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`, `email`, `phone`, `data_nascimento`) VALUES(?)"
    const values = [
        req.body.nome,
        req.body.email,
        req.body.phone,
        req.body.data_nascimento
    ]
    db.query(q, [values], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Usuário criado com sucesso")
    })
}

const updateUser = (req, res) => {
    const q = "UPDATE usuarios SET `nome` = ?, email = ?, phone = ?, data_nascimento = ? WHERE `id` = ?"
    const values = [
        req.body.nome,
        req.body.email,
        req.body.phone,
        req.body.data_nascimento
    ]
    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Usuário atualizado com sucesso")
    })

}

const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?"

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Usuário deletado com sucesso")
    })

}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}