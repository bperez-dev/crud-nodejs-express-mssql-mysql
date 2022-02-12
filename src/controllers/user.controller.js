const User = require('../models/user.model')

exports.create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        if(user){
            res.status(200).json({
                response: {
                    success: true,
                    id: user
                } 
            });
        }
    } catch (error) {
        res.status(400).json({
            response: {
                message: error.message 
            } 
        });
    }
};

exports.read = async (req, res) => {
    try {
        const user = await User.read();
        res.status(200).json(user);

    } catch (error) {
        res.status(400).json({
            response: {
                message: error.message 
            } 
        });
    }
};

exports.update = async (req, res) => {
    try {
        const user = await User.update(req.params.id, req.body)
        if(user){
            res.status(200).json({
                response: {
                    success: true,
                    id: user
                } 
            });
        }
    } catch (error) {
        res.status(400).json({
            response: {
                message: error.message 
            } 
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const user = await User.delete(req.params.id);
        if(user){
            res.status(200).json({
                response: {
                    success: true,
                    rowsAffected: user
                } 
            });
        }
    } catch (error) {
        res.status(400).json({
            response: {
                message: error.message 
            } 
        });
    }
};