const User = require("../model/User");

class UserController {

    async index(req, res) {
        const data = await User.find({});
        return res.json(data);
    }

    async show(req, res) {
        const data = await User.findOne({'_id': req.params.id});
        return res.json(data);
    }
    
    async store(req, res) {
        const data = await User.create(req.body);
        return res.json(data);
    }

    async update(req, res) {
        const data = await User.findOne({_id: req.params.id}).updateOne(req.body);
        return res.json(req.body);
    }
}

module.exports = new UserController();
