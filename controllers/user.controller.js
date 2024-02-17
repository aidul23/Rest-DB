const User = require("../models/user.model");
const {v4: uuidv4} = require("uuid");

const getAllUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({id: req.params.id});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            fullName: req.body.fullName,
            email: req.body.email
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({id: req.params.id});
        user.fullName = req.body.fullName;
        user.email = req.body.email;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
    res.status(200).json({
        message: "update single user"
    });
}

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({id: req.params.id});
        res.status(200).json({message: "user is deleted!"});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {getAllUsers, getUser, createUser, updateUser, deleteUser};
